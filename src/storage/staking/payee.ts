import { decodeId, encodeId } from '../../common/tools'
import { StakingPayeeStorage } from '../../types/generated/storage'
import * as v29 from '../../types/generated/v29'
import { StorageContext } from '../../types/generated/support'
import { UnknownVersionError } from '../../common/errors'
import assert from 'assert'

export interface StorageData {
    payee: 'Account' | 'Staked' | 'Stash' | 'Controller' | 'None'
    account: Uint8Array | undefined
}

async function getStorageData(ctx: StorageContext, account: Uint8Array): Promise<StorageData | undefined> {
    const storage = new StakingPayeeStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV13) {
        const { __kind, value } = await storage.getAsV13(account)
        return {
            payee: __kind,
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            account: value!,
        }
    } else if (storage.isV29) {
        const data = await storage.getAsV29(account)
        return {
            payee: data.__kind,
            account: (data as v29.RewardDestination_Account).value,
        }
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

const storageCache: {
    hash?: string
    values: Map<string, Payee>
} = {
    values: new Map(),
}

export type Payee = PayeeCommon | PayeeAccount
export interface PayeeCommon {
    payee: 'Staked' | 'Stash' | 'Controller' | 'None'
}

export interface PayeeAccount {
    payee: 'Account'
    account: string
}

export async function getPayee(ctx: StorageContext, account: string): Promise<Payee | undefined> {
    if (storageCache.hash !== ctx.block.hash) {
        storageCache.hash = ctx.block.hash
        storageCache.values.clear()
    }

    const key = account
    let value = storageCache.values.get(key)

    if (!value) {
        const u8 = decodeId(account)
        if (!u8) return undefined

        const data = await getStorageData(ctx, u8)
        if (!data) return undefined

        if (data.payee === 'Account') {
            assert(data.account != null)
            value = {
                payee: data.payee,
                account: encodeId(data.account),
            }
        } else {
            value = {
                payee: data.payee,
            }
        }

        storageCache.values.set(key, value)
    }

    return value
}

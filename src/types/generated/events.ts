import assert from 'assert'
import {EventContext, Result, deprecateLatest} from './support'
import * as v1020 from './v1020'
import * as v1050 from './v1050'
import * as v1051 from './v1051'
import * as v9010 from './v9010'
import * as v9090 from './v9090'

export class CrowdloanContributedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'Crowdloan.Contributed')
  }

  /**
   *  Contributed to a crowd sale. [who, fund_index, amount]
   */
  get isV9010(): boolean {
    return this.ctx._chain.getEventHash('Crowdloan.Contributed') === 'ad00729b31f26d2879a6f96c1691ed42a69cd4947c75e84221a6bde93a3415bc'
  }

  /**
   *  Contributed to a crowd sale. [who, fund_index, amount]
   */
  get asV9010(): [v9010.AccountId, v9010.ParaId, v9010.Balance] {
    assert(this.isV9010)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9010
  }

  get asLatest(): [v9010.AccountId, v9010.ParaId, v9010.Balance] {
    deprecateLatest()
    return this.asV9010
  }
}

export class CrowdloanCreatedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'Crowdloan.Created')
  }

  /**
   *  Create a new crowdloaning campaign. [fund_index]
   */
  get isV9010(): boolean {
    return this.ctx._chain.getEventHash('Crowdloan.Created') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  Create a new crowdloaning campaign. [fund_index]
   */
  get asV9010(): v9010.ParaId {
    assert(this.isV9010)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9010
  }

  get asLatest(): v9010.ParaId {
    deprecateLatest()
    return this.asV9010
  }
}

export class CrowdloanDissolvedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'Crowdloan.Dissolved')
  }

  /**
   *  Fund is dissolved. [fund_index]
   */
  get isV9010(): boolean {
    return this.ctx._chain.getEventHash('Crowdloan.Dissolved') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  Fund is dissolved. [fund_index]
   */
  get asV9010(): v9010.ParaId {
    assert(this.isV9010)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9010
  }

  get asLatest(): v9010.ParaId {
    deprecateLatest()
    return this.asV9010
  }
}

export class GrandpaNewAuthoritiesEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'Grandpa.NewAuthorities')
  }

  /**
   *  New authority set has been applied.
   */
  get isV1020(): boolean {
    return this.ctx._chain.getEventHash('Grandpa.NewAuthorities') === 'a1a8c88e19b8fedde4aab1bef41aa9e1bdfc3748b1e39f7ad5bb09d0347d9505'
  }

  /**
   *  New authority set has been applied.
   */
  get asV1020(): v1020.AuthorityList {
    assert(this.isV1020)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * New authority set has been applied.
   */
  get isV9130(): boolean {
    return this.ctx._chain.getEventHash('Grandpa.NewAuthorities') === 'e25505d283e6b21359efad4ea3b01da035cbbe2b268fd3cbfb12ca0b5577a9de'
  }

  /**
   * New authority set has been applied.
   */
  get asV9130(): {authoritySet: [Uint8Array, bigint][]} {
    assert(this.isV9130)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9130
  }

  get asLatest(): {authoritySet: [Uint8Array, bigint][]} {
    deprecateLatest()
    return this.asV9130
  }
}

export class StakingBondedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'Staking.Bonded')
  }

  /**
   *  An account has bonded this amount.
   * 
   *  NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
   *  it will not be emitted for staking rewards when they are added to stake.
   */
  get isV1051(): boolean {
    return this.ctx._chain.getEventHash('Staking.Bonded') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
  }

  /**
   *  An account has bonded this amount.
   * 
   *  NOTE: This event is only emitted when funds are bonded via a dispatchable. Notably,
   *  it will not be emitted for staking rewards when they are added to stake.
   */
  get asV1051(): [v1051.AccountId, v1051.Balance] {
    assert(this.isV1051)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV1051
  }

  get asLatest(): [v1051.AccountId, v1051.Balance] {
    deprecateLatest()
    return this.asV1051
  }
}

export class StakingEraPaidEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'Staking.EraPaid')
  }

  /**
   *  The era payout has been set; the first balance is the validator-payout; the second is
   *  the remainder from the maximum amount of reward.
   *  \[era_index, validator_payout, remainder\]
   */
  get isV9090(): boolean {
    return this.ctx._chain.getEventHash('Staking.EraPaid') === '1b75f96f7f74feed246668e0244abf707060018d56d88b1a638f75594d2a8005'
  }

  /**
   *  The era payout has been set; the first balance is the validator-payout; the second is
   *  the remainder from the maximum amount of reward.
   *  \[era_index, validator_payout, remainder\]
   */
  get asV9090(): [v9090.EraIndex, v9090.Balance, v9090.Balance] {
    assert(this.isV9090)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9090
  }

  get asLatest(): [v9090.EraIndex, v9090.Balance, v9090.Balance] {
    deprecateLatest()
    return this.asV9090
  }
}

export class StakingPayoutStartedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'Staking.PayoutStarted')
  }

  /**
   *  The stakers' rewards are getting paid. \[era_index, validator_stash\]
   */
  get isV9090(): boolean {
    return this.ctx._chain.getEventHash('Staking.PayoutStarted') === '0379562584d6426ccff49705dfa9dba95ad94215b772fd97d0ad0c4ca0001c12'
  }

  /**
   *  The stakers' rewards are getting paid. \[era_index, validator_stash\]
   */
  get asV9090(): [v9090.EraIndex, v9090.AccountId] {
    assert(this.isV9090)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9090
  }

  get asLatest(): [v9090.EraIndex, v9090.AccountId] {
    deprecateLatest()
    return this.asV9090
  }
}

export class StakingRewardEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'Staking.Reward')
  }

  /**
   *  All validators have been rewarded by the first balance; the second is the remainder
   *  from the maximum amount of reward.
   */
  get isV1020(): boolean {
    return this.ctx._chain.getEventHash('Staking.Reward') === 'f7d5bd1431cb954502149f64a8137986d660e0729a3d9731d421496b4298be52'
  }

  /**
   *  All validators have been rewarded by the first balance; the second is the remainder
   *  from the maximum amount of reward.
   */
  get asV1020(): [v1020.Balance, v1020.Balance] {
    assert(this.isV1020)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   *  The staker has been rewarded by this amount. AccountId is controller account.
   */
  get isV1050(): boolean {
    return this.ctx._chain.getEventHash('Staking.Reward') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
  }

  /**
   *  The staker has been rewarded by this amount. AccountId is controller account.
   */
  get asV1050(): [v1050.AccountId, v1050.Balance] {
    assert(this.isV1050)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV1050
  }

  get asLatest(): [v1050.AccountId, v1050.Balance] {
    deprecateLatest()
    return this.asV1050
  }
}

export class StakingRewardedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'Staking.Rewarded')
  }

  /**
   *  The nominator has been rewarded by this amount. \[stash, amount\]
   */
  get isV9090(): boolean {
    return this.ctx._chain.getEventHash('Staking.Rewarded') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
  }

  /**
   *  The nominator has been rewarded by this amount. \[stash, amount\]
   */
  get asV9090(): [v9090.AccountId, v9090.Balance] {
    assert(this.isV9090)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9090
  }

  get asLatest(): [v9090.AccountId, v9090.Balance] {
    deprecateLatest()
    return this.asV9090
  }
}

export class StakingSlashEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'Staking.Slash')
  }

  /**
   *  One validator (and its nominators) has been slashed by the given amount.
   */
  get isV1020(): boolean {
    return this.ctx._chain.getEventHash('Staking.Slash') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
  }

  /**
   *  One validator (and its nominators) has been slashed by the given amount.
   */
  get asV1020(): [v1020.AccountId, v1020.Balance] {
    assert(this.isV1020)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV1020
  }

  get asLatest(): [v1020.AccountId, v1020.Balance] {
    deprecateLatest()
    return this.asV1020
  }
}

export class StakingSlashedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'Staking.Slashed')
  }

  /**
   *  One validator (and its nominators) has been slashed by the given amount.
   *  \[validator, amount\]
   */
  get isV9090(): boolean {
    return this.ctx._chain.getEventHash('Staking.Slashed') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
  }

  /**
   *  One validator (and its nominators) has been slashed by the given amount.
   *  \[validator, amount\]
   */
  get asV9090(): [v9090.AccountId, v9090.Balance] {
    assert(this.isV9090)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV9090
  }

  get asLatest(): [v9090.AccountId, v9090.Balance] {
    deprecateLatest()
    return this.asV9090
  }
}

export class StakingUnbondedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'Staking.Unbonded')
  }

  /**
   *  An account has unbonded this amount.
   */
  get isV1051(): boolean {
    return this.ctx._chain.getEventHash('Staking.Unbonded') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
  }

  /**
   *  An account has unbonded this amount.
   */
  get asV1051(): [v1051.AccountId, v1051.Balance] {
    assert(this.isV1051)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV1051
  }

  get asLatest(): [v1051.AccountId, v1051.Balance] {
    deprecateLatest()
    return this.asV1051
  }
}

export class StakingWithdrawnEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'Staking.Withdrawn')
  }

  /**
   *  An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
   *  from the unlocking queue.
   */
  get isV1051(): boolean {
    return this.ctx._chain.getEventHash('Staking.Withdrawn') === '23bebce4ca9ed37548947d07d4dc50e772f07401b9a416b6aa2f3e9cb5adcaf4'
  }

  /**
   *  An account has called `withdraw_unbonded` and removed unbonding chunks worth `Balance`
   *  from the unlocking queue.
   */
  get asV1051(): [v1051.AccountId, v1051.Balance] {
    assert(this.isV1051)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV1051
  }

  get asLatest(): [v1051.AccountId, v1051.Balance] {
    deprecateLatest()
    return this.asV1051
  }
}

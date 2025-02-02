import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Campaign {
  'id' : bigint,
  'title' : string,
  'creator' : Principal,
  'description' : string,
  'creatorType' : CreatorType,
  'targetAmount' : bigint,
  'currentAmount' : bigint,
}
export type CreatorType = { 'Fundraiser' : null } |
  { 'Individual' : null };
export interface _SERVICE {
  'createCampaign' : ActorMethod<[string, string, bigint, CreatorType], bigint>,
  'donateToCampaign' : ActorMethod<[bigint, bigint], boolean>,
  'getAllCampaigns' : ActorMethod<[], Array<Campaign>>,
  'getCampaign' : ActorMethod<[bigint], [] | [Campaign]>,
  'getTotalDonations' : ActorMethod<[bigint], bigint>,
  'registerFundraiser' : ActorMethod<[string], boolean>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];

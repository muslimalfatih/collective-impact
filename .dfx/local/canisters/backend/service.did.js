export const idlFactory = ({ IDL }) => {
  const CreatorType = IDL.Variant({
    'Fundraiser' : IDL.Null,
    'Individual' : IDL.Null,
  });
  const Campaign = IDL.Record({
    'id' : IDL.Nat,
    'title' : IDL.Text,
    'creator' : IDL.Principal,
    'description' : IDL.Text,
    'creatorType' : CreatorType,
    'targetAmount' : IDL.Nat,
    'currentAmount' : IDL.Nat,
  });
  return IDL.Service({
    'createCampaign' : IDL.Func(
        [IDL.Text, IDL.Text, IDL.Nat, CreatorType],
        [IDL.Nat],
        [],
      ),
    'donateToCampaign' : IDL.Func([IDL.Nat, IDL.Nat], [IDL.Bool], []),
    'getAllCampaigns' : IDL.Func([], [IDL.Vec(Campaign)], ['query']),
    'getCampaign' : IDL.Func([IDL.Nat], [IDL.Opt(Campaign)], ['query']),
    'getTotalDonations' : IDL.Func([IDL.Nat], [IDL.Nat], ['query']),
    'registerFundraiser' : IDL.Func([IDL.Text], [IDL.Bool], []),
  });
};
export const init = ({ IDL }) => { return []; };

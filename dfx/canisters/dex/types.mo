// dfx/canisters/dex/types.mo
module {
  public type Time = Int;
  public type CampaignId = Principal;

  public type Campaign = {
    id: CampaignId;
    title: Text;
    image: Blob;
    shortDescription: Text;
    startDate: Time;
    endDate: Time;
    targetDonation: Float;
    currentDonation: Float;
    ticketQuota: Int;
    campaignerName: Text;
  };
};
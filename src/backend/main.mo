import List "mo:base/List";
import HashMap "mo:base/HashMap";
import Hash "mo:base/Hash";
import Iter "mo:base/Iter";
import Nat "mo:base/Nat";
import Principal "mo:base/Principal";
import Time "mo:base/Time";
import Result "mo:base/Result";

persistent actor CollectiveImpact {
  // Types
  public type CampaignId = Nat;
  public type CreatorType = {
    #Individual;
    #Organization;
  };
  
  public type Campaign = {
    id: CampaignId;
    title: Text;
    description: Text;
    goal: Nat;
    currentAmount: Nat;
    creator: Principal;
    creatorType: CreatorType;
    createdAt: Time.Time;
    status: {
      #Active;
      #Completed;
      #Cancelled;
    };
  };

  public type CreateCampaignRequest = {
    title: Text;
    description: Text;
    goal: Nat;
    creatorType: CreatorType;
  };

  public type Donation = {
    id: Nat;
    campaignId: CampaignId;
    donor: Principal;
    amount: Nat;
    timestamp: Time.Time;
  };

  // State
  private transient var nextCampaignId: CampaignId = 1;
  private transient var nextDonationId: Nat = 1;
  private transient let campaigns = HashMap.HashMap<CampaignId, Campaign>(1, Nat.equal, Hash.hash);
  private transient let donations = HashMap.HashMap<Nat, Donation>(1, Nat.equal, Hash.hash);
  private transient let campaignDonations = HashMap.HashMap<CampaignId, List.List<Nat>>(1, Nat.equal, Hash.hash);

  // Campaign functions
  public shared(msg) func createCampaign(
    title: Text, 
    description: Text, 
    goal: Nat, 
    creatorType: CreatorType
  ) : async Result.Result<CampaignId, Text> {
    if (title.size() == 0) {
      return #err("Title cannot be empty");
    };
    if (description.size() == 0) {
      return #err("Description cannot be empty");
    };
    if (goal == 0) {
      return #err("Goal must be greater than 0");
    };

    let campaignId = nextCampaignId;
    nextCampaignId += 1;

    let campaign: Campaign = {
      id = campaignId;
      title = title;
      description = description;
      goal = goal;
      currentAmount = 0;
      creator = msg.caller;
      creatorType = creatorType;
      createdAt = Time.now();
      status = #Active;
    };

    campaigns.put(campaignId, campaign);
    campaignDonations.put(campaignId, List.nil());

    #ok(campaignId)
  };

  public query func getAllCampaigns() : async [Campaign] {
    Iter.toArray(campaigns.vals())
  };

  public query func getCampaign(id: CampaignId) : async ?Campaign {
    campaigns.get(id)
  };

  public query func getCampaignsByCreator(creator: Principal) : async [Campaign] {
    let creatorCampaigns = Iter.toArray(
      Iter.filter(campaigns.vals(), func(c: Campaign) : Bool {
        c.creator == creator
      })
    );
    creatorCampaigns
  };

  // Donation functions
  public shared(msg) func donate(campaignId: CampaignId, amount: Nat) : async Result.Result<Nat, Text> {
    switch (campaigns.get(campaignId)) {
      case null {
        #err("Campaign not found")
      };
      case (?campaign) {
        if (campaign.status != #Active) {
          return #err("Campaign is not active");
        };
        if (amount == 0) {
          return #err("Donation amount must be greater than 0");
        };

        let donationId = nextDonationId;
        nextDonationId += 1;

        let donation: Donation = {
          id = donationId;
          campaignId = campaignId;
          donor = msg.caller;
          amount = amount;
          timestamp = Time.now();
        };

        donations.put(donationId, donation);

        // Update campaign current amount
        let updatedCampaign = {
          campaign with
          currentAmount = campaign.currentAmount + amount;
          status = if (campaign.currentAmount + amount >= campaign.goal) #Completed else #Active;
        };
        campaigns.put(campaignId, updatedCampaign);

        // Add donation to campaign's donation list
        switch (campaignDonations.get(campaignId)) {
          case null {
            campaignDonations.put(campaignId, List.push(donationId, List.nil()));
          };
          case (?donationList) {
            campaignDonations.put(campaignId, List.push(donationId, donationList));
          };
        };

        #ok(donationId)
      };
    }
  };

  public query func getDonations(campaignId: CampaignId) : async [Donation] {
    switch (campaignDonations.get(campaignId)) {
      case null { [] };
      case (?donationIds) {
        let donationList = List.mapFilter(donationIds, func(id: Nat) : ?Donation {
          donations.get(id)
        });
        List.toArray(donationList)
      };
    }
  };

  public query func getDonationStats(campaignId: CampaignId) : async {
    totalDonations: Nat;
    totalAmount: Nat;
    donorCount: Nat;
  } {
    switch (campaignDonations.get(campaignId)) {
      case null {
        { totalDonations = 0; totalAmount = 0; donorCount = 0 }
      };
      case (?donationIds) {
        var totalDonations = 0;
        var totalAmount = 0;
        let uniqueDonors = HashMap.HashMap<Principal, Bool>(1, Principal.equal, Principal.hash);

        for (donationId in List.toIter(donationIds)) {
          switch (donations.get(donationId)) {
            case null {};
            case (?donation) {
              totalDonations += 1;
              totalAmount += donation.amount;
              uniqueDonors.put(donation.donor, true);
            };
          };
        };

        { 
          totalDonations = totalDonations; 
          totalAmount = totalAmount; 
          donorCount = uniqueDonors.size() 
        }
      };
    }
  };

  // Admin functions
  public shared(msg) func cancelCampaign(campaignId: CampaignId) : async Result.Result<(), Text> {
    switch (campaigns.get(campaignId)) {
      case null {
        #err("Campaign not found")
      };
      case (?campaign) {
        if (campaign.creator != msg.caller) {
          return #err("Only the campaign creator can cancel the campaign");
        };
        if (campaign.status != #Active) {
          return #err("Campaign is not active");
        };

        let updatedCampaign = {
          campaign with
          status = #Cancelled;
        };
        campaigns.put(campaignId, updatedCampaign);
        #ok(())
      };
    }
  };

  // Query functions for statistics
  public query func getTotalCampaigns() : async Nat {
    campaigns.size()
  };

  public query func getTotalDonations() : async Nat {
    donations.size()
  };

  public query func getTotalDonationAmount() : async Nat {
    var total = 0;
    for (donation in donations.vals()) {
      total += donation.amount;
    };
    total
  };
}

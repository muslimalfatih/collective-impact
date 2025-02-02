import List "mo:base/List";
import HashMap "mo:base/HashMap";
import Hash "mo:base/Hash";
import Iter "mo:base/Iter";
import Nat "mo:base/Nat";
import Principal "mo:base/Principal";

actor CollectiveImpact {

  // Enum untuk tipe pembuat campaign
  type CreatorType = {
    #Individual;
    #Fundraiser;
  };

  // Struktur data Campaign
  type Campaign = {
    id : Nat;
    title : Text;
    description : Text;
    imageUrl : Text;
    targetAmount : Nat;
    currentAmount : Nat;
    creator : Principal;
    creatorType : CreatorType;
  };

  // Struktur data Fundraiser (Organisasi)
  type Fundraiser = {
    id : Principal;
    name : Text;
    campaigns : List.List<Nat>;
  };

  // Struktur data Donor
  type Donor = {
    donorId : Principal;
    amount : Nat;
  };

  // 🔥 STABLE VAR: Simpan campaign dalam List karena HashMap tidak bisa dibuat stable langsung
  stable var campaignData : [(Nat, Campaign)] = [];

  // 🔥 NON-STABLE: HashMap untuk akses cepat di runtime
  var campaigns = HashMap.HashMap<Nat, Campaign>(0, Nat.equal, Hash.hash);

  stable var fundraiserData : [(Principal, Fundraiser)] = [];
  var fundraisers = HashMap.HashMap<Principal, Fundraiser>(0, Principal.equal, Principal.hash);

  stable var donationData : [(Nat, List.List<Donor>)] = [];
  var donations = HashMap.HashMap<Nat, List.List<Donor>>(0, Nat.equal, Hash.hash);

  stable var campaignCounter : Nat = 0;

  // 🔥 Saat canister mulai, load data dari stable storage ke HashMap
  system func preupgrade() {
    campaignData := Iter.toArray(campaigns.entries());
    fundraiserData := Iter.toArray(fundraisers.entries());
    donationData := Iter.toArray(donations.entries());
  };

  system func postupgrade() {
    campaigns := HashMap.fromIter<Nat, Campaign>(Iter.fromArray(campaignData), 0, Nat.equal, Hash.hash);
    fundraisers := HashMap.fromIter<Principal, Fundraiser>(Iter.fromArray(fundraiserData), 0, Principal.equal, Principal.hash);
    donations := HashMap.fromIter<Nat, List.List<Donor>>(Iter.fromArray(donationData), 0, Nat.equal, Hash.hash);
  };

  // ✅ Membuat Campaign (untuk Individu & Fundraiser)
  public func createCampaign(
    title : Text,
    description : Text,
    imageUrl : Text,
    targetAmount : Nat,
    creatorTypeText : Text,
  ) : async Nat {
    let caller = Principal.fromActor(CollectiveImpact);
    campaignCounter += 1;

    let creatorType = switch creatorTypeText {
      case ("Individual") #Individual;
      case ("Fundraiser") #Fundraiser;
      case _ #Individual;
    };

    let newCampaign : Campaign = {
      id = campaignCounter;
      title = title;
      description = description;
      imageUrl = imageUrl;
      targetAmount = targetAmount;
      currentAmount = 0;
      creator = caller;
      creatorType = creatorType;
    };

    campaigns.put(campaignCounter, newCampaign);

    // Jika pembuat adalah Fundraiser, tambahkan ke daftar campaign mereka
    switch creatorType {
      case (#Fundraiser) {
        let fundraiserEntry = fundraisers.get(caller);
        switch fundraiserEntry {
          case (?fundraiser) {
            let updatedFundraiser = {
              id = fundraiser.id;
              name = fundraiser.name;
              campaigns = List.push(campaignCounter, fundraiser.campaigns);
            };
            fundraisers.put(caller, updatedFundraiser);
          };
          case null {
            let newFundraiser = {
              id = caller;
              name = "Unknown Fundraiser";
              campaigns = List.push(campaignCounter, List.nil<Nat>());
            };
            fundraisers.put(caller, newFundraiser);
          };
        };
      };
      case (#Individual) {}; // Tidak perlu menyimpan list campaign untuk individu
    };

    return campaignCounter;
  };

  // ✅ Donasi ke campaign
  public func donateToCampaign(campaignId : Nat, amount : Nat) : async Bool {
    let caller = Principal.fromActor(CollectiveImpact);

    switch (campaigns.get(campaignId)) {
      case (?campaign) {
        let updatedCampaign = {
          id = campaign.id;
          title = campaign.title;
          description = campaign.description;
          imageUrl = campaign.imageUrl;
          targetAmount = campaign.targetAmount;
          currentAmount = campaign.currentAmount + amount;
          creator = campaign.creator;
          creatorType = campaign.creatorType;
        };
        campaigns.put(campaignId, updatedCampaign);

        let donor : Donor = { donorId = caller; amount = amount };

        let donorList = donations.get(campaignId);
        let updatedDonorList = switch donorList {
          case (?list) List.push(donor, list);
          case null List.push(donor, List.nil<Donor>());
        };

        donations.put(campaignId, updatedDonorList);
        return true;
      };
      case null return false;
    };
  };

  // ✅ Mendapatkan semua campaign
  public query func getAllCampaigns() : async [Campaign] {
    let campaignArray = Iter.toArray(campaigns.vals());
    return campaignArray;
  };

  // ✅ Mendapatkan detail campaign berdasarkan ID
  public query func getCampaign(campaignId : Nat) : async ?Campaign {
    campaigns.get(campaignId);
  };

  // ✅ Mendapatkan total donasi terkumpul untuk campaign
  public query func getTotalDonations(campaignId : Nat) : async Nat {
    switch (campaigns.get(campaignId)) {
      case (?campaign) campaign.currentAmount;
      case null 0;
    };
  };

  // ✅ Mendaftarkan Fundraiser (Organisasi)
  public func registerFundraiser(name : Text) : async Bool {
    let caller = Principal.fromActor(CollectiveImpact);

    // Periksa apakah sudah terdaftar
    switch (fundraisers.get(caller)) {
      case (?_) return false;
      case null {
        let newFundraiser = {
          id = caller;
          name = name;
          campaigns = List.nil<Nat>();
        };
        fundraisers.put(caller, newFundraiser);
        return true;
      };
    };
  };
};

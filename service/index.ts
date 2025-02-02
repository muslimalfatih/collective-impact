import {
  createActor as campaignActor,
  canisterId as campaignCanisterId,
} from "../src/declarations/assets";

export const makeActor = (canisterId, createActor) => {
  return createActor(canisterId, {
    agentOptions: {
      host: "http://localhost:4943",
    },
  });
};

export function makeCampaignActor() {
  return makeActor(campaignCanisterId, campaignActor);
}

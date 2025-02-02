import {
  createActor as backendActor,
} from "../src/declarations/backend";

export const makeActor = (canisterId: string, createActor: any) => {
  return createActor(canisterId, {
    agentOptions: {
      host: process.env.NEXT_PUBLIC_DFX_NETWORK === "local" 
        ? "http://127.0.0.1:4943" 
        : "https://ic0.app",
    },
  });
};

export function makeCampaignActor() {
  const canisterId = process.env.NEXT_PUBLIC_CANISTER_ID_BACKEND;
  if (!canisterId) {
    throw new Error("Backend canister ID not found");
  }
  return makeActor(canisterId, backendActor);
}

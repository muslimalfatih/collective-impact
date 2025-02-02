interface I_Feature {
  text: string;
  description: string;
}

export const Feature: I_Feature[] = [
  {
    text: "DAO Governance",
    description: "Stakeholders vote on projects.",
  },
  {
    text: "Near-Zero Fees",
    description: "<0.1% fees via ICP.",
  },
  {
    text: "Real-World Rewards",
    description: "Volunteer trips, certificates, governance rights.",
  },
];

# Collective Impact (WIP) 🌱

[![Built on ICP](https://img.shields.io/badge/Built%20on-Internet%20Computer-blue)](https://internetcomputer.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green)](LICENSE)
[![Hackathon: ICP](https://img.shields.io/badge/Hackathon-ICP-9cf)](https://dfinity.org/hackathons)

> 🏆 **1st Place Winner - ICP Hackathon 10**  
> We're proud to announce that Collective Impact won first place in the ICP Hackathon 10! [See announcement](https://www.instagram.com/p/DF2sPoHT3TP/)

**Collective Impact** is a decentralized crowdfunding platform built on the Internet Computer Protocol (ICP) that empowers communities to fund social impact projects, govern decisions via DAO, and earn real-world rewards like volunteer trip access. This project combines **DeFi mechanics**, **DAO governance**, and **transparent impact tracking** for global good.

## 📖 **Whitepaper & Project Roadmap**

> 🌟 **[Read our comprehensive whitepaper](https://muslimalfatih.notion.site/Collective-Impact-Whitepaper-18d11b35f693807a985fee78a5286490)** to understand our vision, mission, and detailed project roadmap.

This document outlines our strategic approach to creating collective impact and the future development plans.

## 🚀 Problem & Solution  
### **Problem**:  
Traditional crowdfunding platforms charge high fees (5-10%), lack transparency, and centralize control.  

### **Solution**:  

#### 🌱 Donation-Based Crowdfunding
- **Project Creation:** Define goals, budgets, and deadlines (e.g., "Plant 10,000 Trees in Borneo – $10k Goal").

- **Multi-Currency Support:** Donate in ICP, ckUSDC (stablecoin), or Cycles.

- **Escrow Smart Contracts:** Funds auto-release only if goals are met; refunds if failed.

#### 🗳️ DAO Governance
- ***SNS Integration:*** Stakeholders vote on proposals via ICP's Service Nervous System.

- ***Reputation-Driven Voting:*** Frequent donors earn more voting power.

- ***Transparent Execution:*** All proposals and votes stored on-chain.

#### 🎁 Reward System
- ***Voluntrip Access Tokens:*** Fungible tokens redeemable for volunteer trips or certificates.

- ***Governance Tokens:*** Earn voting rights for DAO decisions.

- ***Soulbound Badges (SBTs):*** Non-transferable NFTs proving contribution history (e.g., "EcoHero Badge").


## 🛠️ Tech Stack
- **Blockchain**: Internet Computer Protocol (ICP)
- **Smart Contracts**: Motoko (DAO, donations, rewards)
- **Frontend**: Next JS + TypeScript (hosted 100% on-chain)
- **Tokens**: DIP20 (fungible rewards), SNS (DAO governance)
- **Auth**: Internet Identity (passwordless login)
- **Storage**: ICP Canisters (decentralized data)

## 💻 Development Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or later)
- [pnpm](https://pnpm.io/) (v8 or later)
- [DFX](https://internetcomputer.org/docs/current/developer-docs/build/install-dfx) (latest version)
- [IC SDK](https://internetcomputer.org/docs/current/developer-docs/setup/install/)

### Local Development

1. **Install Dependencies**
```bash
# Install pnpm if you haven't already
npm install -g pnpm

# Install project dependencies
pnpm install

# Make sure dfx is installed and up to date
dfx --version
```

2. **Start Local Internet Computer**
```bash
# Start clean local IC instance in the background
dfx start --clean --background
```

3. **Deploy Canisters**
```bash
# Create canister identifiers
dfx canister create --all

# Build canisters
dfx build

# Deploy canisters locally
dfx deploy

# Generate canister type bindings
dfx generate
```

4. **Start Frontend Development**
```bash
# Start Next.js development server
pnpm dev
```

### Important Notes
- The frontend will be available at `http://localhost:3000`
- Local IC network runs on `http://localhost:8000`
- After making changes to Motoko canisters, you need to rebuild and redeploy:
  ```bash
  dfx build
  dfx deploy
  dfx generate
  ```
- To stop the local IC network:
  ```bash
  dfx stop
  ```

## Collective-Impact
```
├── backend/
│   ├── canisters/
│   │   └── dex/           # Main DEX canister
│   │       ├── main.mo    # Main canister logic
│   │       └── types.mo   # Type definitions
├── frontend/
│   ├── dist/              # Compiled files
│   ├── node_modules/      # Dependencies
│   ├── public/            # Public static files
│   └── src/               # Frontend source code
├── .dfx/                  # DFX configuration files
├── .next/                 # Next.js build output
├── .gitignore             # Git ignore configuration
├── .env.local             # Local environment variables
├── components.json        # DFX components
├── dfx.json               # DFX configuration file
├── pnpm-lock.yaml         # pnpm lock file
├── README.md              # Project README
├── package.json           # Project package file
├── tsconfig.json          # TypeScript configuration
└── vite.config.ts         # Vite configuration for frontend
```

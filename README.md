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

## 🌐 Live Application

**🎉 Collective Impact is now live on the Internet Computer mainnet!**

### 🔗 Application URLs
- **🌐 Frontend App:** https://irln2-6qaaa-aaaap-qqdua-cai.icp0.io/
- **⚙️ Backend Canister:** https://j4fju-ryaaa-aaaap-qqdtq-cai.icp0.io
- **🛠️ Candid UI (API Testing):** https://a4gq6-oaaaa-aaaab-qaa4q-cai.raw.icp0.io/?id=j4fju-ryaaa-aaaap-qqdtq-cai

### 📋 Canister IDs
- **Frontend:** `irln2-6qaaa-aaaap-qqdua-cai`
- **Backend:** `j4fju-ryaaa-aaaap-qqdtq-cai`

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

# Install frontend dependencies
pnpm -C src/frontend install

# Make sure dfx is installed and up to date
dfx --version
```

2. **Start Local Internet Computer**
```bash
# Start clean local IC instance in the background
dfx start --clean --background
```

3. **Deploy Canisters Locally**
```bash
# Create canister identifiers
dfx canister create --all

# Build and deploy backend canister
dfx deploy backend

# Build frontend
pnpm -C src/frontend build

# Deploy frontend canister
dfx deploy frontend
```

4. **Start Frontend Development**
```bash
# Start Vite development server
pnpm -C src/frontend dev
```

### Mainnet Deployment

1. **Set up Identity and Cycles**
```bash
# Check your identity
dfx identity whoami
dfx identity get-principal

# Check cycles balance
dfx cycles balance --network ic
```

2. **Deploy to Mainnet**
```bash
# Create canisters on mainnet
dfx canister create backend --network ic
dfx canister create frontend --network ic

# Deploy backend
dfx deploy backend --network ic

# Deploy frontend
dfx deploy frontend --network ic
```

### Important Notes
- Local IC network runs on `http://localhost:8000`
- Frontend development server runs on `http://localhost:5173` (Vite)
- After making changes to Motoko canisters, rebuild and redeploy:
  ```bash
  dfx build backend
  dfx deploy backend --network ic  # for mainnet
  ```
- Mainnet deployment requires cycles (convert ICP to cycles via [NNS](https://nns.ic0.app))
- To stop the local IC network:
  ```bash
  dfx stop
  ```

## 📁 Project Structure

```
collective-impact/
├── src/
│   ├── backend/
│   │   └── main.mo        # Motoko backend canister
│   ├── frontend/          # React frontend application
│   │   ├── dist/          # Built frontend files
│   │   ├── src/           # Frontend source code
│   │   ├── package.json   # Frontend dependencies
│   │   └── vite.config.ts # Vite configuration
│   └── declarations/      # Generated canister interfaces
├── canister_ids.json      # Deployed canister IDs
├── dfx.json              # DFX configuration
├── .gitignore            # Git ignore rules
└── README.md             # This file
```

## 🔧 Canister Information

### Mainnet Canisters
- **Backend Canister ID:** `j4fju-ryaaa-aaaap-qqdtq-cai`
- **Frontend Canister ID:** `irln2-6qaaa-aaaap-qqdua-cai`

### Functions Available
- `createCampaign(title, description, goal, creatorType)` - Create a new campaign
- `getAllCampaigns()` - Get all campaigns
- `getCampaign(id)` - Get specific campaign
- `donate(campaignId, amount)` - Donate to a campaign
- `getDonations(campaignId)` - Get campaign donations
- `getDonationStats(campaignId)` - Get donation statistics

# Collective Impact Whitepaper

**Decentralized Crowdfunding for Social Impact**  
_Built on Internet Computer Protocol (ICP)_

## Abstract

Collective Impact is a decentralized crowdfunding platform empowering communities to fund and govern social impact projects (e.g., volunteer trips, environmental initiatives) through DAO governance, transparent donations, and real-world rewards. Built on ICP, it eliminates intermediaries, reduces fees to near-zero, and ensures every dollar is tracked on-chain.

## 1. Introduction

### 1.1 The Problem

- **Centralized Control**: Traditional platforms (e.g., GoFundMe) charge 5-10% fees and censor projects
- **Opaque Spending**: 30% of charitable funds are misallocated (Stanford Study)
- **Limited Incentives**: Donors lack ownership or governance rights

### 1.2 The Solution

- **DAO Governance**: Contributors vote on project funding via governance tokens
- **Near-Zero Fees**: <0.1% fees via ICP's reverse gas model
- **Tangible Rewards**: Earn redeemable tokens for volunteer trips, certificates, or governance rights

## 2. Technical Architecture

### 2.1 Blockchain Infrastructure

**Internet Computer Protocol (ICP)**:

- On-Chain Hosting: Frontend + backend fully decentralized
- Scalability: 1,100+ TPS, 1-second finality
- Cost: $0.0001 per transaction

### 2.2 Smart Contracts

| Contract         | Function                                         |
| ---------------- | ------------------------------------------------ |
| CampaignCanister | Create/manage campaigns, track donations         |
| DAOCanister      | Propose/vote on projects using governance tokens |
| RewardCanister   | Mint fungible tokens (rewards) and SBTs          |
| EscrowCanister   | Lock funds until DAO approves release            |

### 2.3 Token Standards

- **DIP-20**: Fungible tokens for rewards (e.g., Voluntrip Access Tokens)
- **SNS DAO**: Native ICP framework for governance token distribution
- **Soulbound Tokens (SBTs)**: Non-transferable badges for contributors

## 3. Tokenomics

### 3.1 $IMPACT Token

**Utility**:

- Governance: Vote on proposals (1 token = 1 vote)
- Staking: Earn 5% APY in platform fees
- Rewards: Redeem for volunteer trips or premium features

**Supply**:

- Total: 1,000,000,000 $IMPACT
- Circulating (Year 1): 200,000,000

### 3.2 Distribution

| Allocation           | %   | Vesting             |
| -------------------- | --- | ------------------- |
| Community (Airdrops) | 40  | Linear over 2 years |
| Treasury             | 30  | DAO-controlled      |
| Team & Advisors      | 20  | 3-year cliff        |
| Investors            | 10  | 1-year cliff        |

## 4. Use Cases

### 4.1 Funding a School in Bali

- Creator: NGO proposes $10,000 campaign
- Donors: Contribute ICP/USDC, earn $IMPACT tokens
- DAO Vote: Token holders approve fund release
- Impact: 200+ children gain education access

### 4.2 Volunteer Trip Rewards

- Donate $200+ → Earn 1 Voluntrip Access Token
- Donate $500+ → Earn governance tokens + priority access

## 5. Roadmap

**Phase 1: Hackathon MVP (Q1 2025)**

- DAO voting, basic rewards, campaign creation
- Integrate ckUSDC donations

**Phase 2: Scale (Q2 2025 – Q4 2025)**

- SBT integration, mobile app, 10+ NGO partners
- Cross-chain donations (ETH, BTC)

**Phase 3: Global Impact (2026+)**

- 100,000+ active users
- Partnerships with UN/World Bank

## 6. Security & Compliance

### 6.1 Audits

- Smart Contracts: Quarterly audits by CertiK/OpenZeppelin
- Funds: Multi-sig wallets managed by DAO

### 6.2 Legal

- Regulatory Compliance: Utility token model (non-security)
- KYC/AML: Optional for donations >$10,000

## 7. Market Analysis

### 7.1 Target Audience

- Donors: 2B+ global crypto users (CoinMarketCap)
- NGOs: $2T NGO sector (World Bank)

### 7.2 Competitive Advantage

| Metric       | CollectiveImpact | Traditional Platforms |
| ------------ | ---------------- | --------------------- |
| Fees         | 0.1%             | 5-10%                 |
| Transparency | Full on-chain    | Opaque                |
| Governance   | DAO-driven       | Centralized           |

## 8. Team & Advisors

**Core Team**:

- Muslim Al Fatih
- Fiqry Choerudin
- Ahmad Dzaky Abrori

**Advisors**: [To be announced]

## 9. Risks & Mitigations

| Risk                | Mitigation                                        |
| ------------------- | ------------------------------------------------- |
| Regulatory Changes  | Work with legal advisors; focus on utility tokens |
| Smart Contract Bugs | Audits + $1M bug bounty program                   |
| Low Adoption        | Partner with NGOs for real-world use cases        |

## 10. Call to Action

- Investors: Join our $500K seed round (20% equity/tokens)
- Developers: Contribute to our [GitHub repo](https://github.com/muslimalfatih/collective-impact)
- NGOs: Apply for grants at grants@collectiveimpact.xyz

## 11. Conclusion

CollectiveImpact bridges Web3 innovation with real-world social impact, creating a future where communities—not corporations—control philanthropy. By leveraging ICP's scalability and DAO governance, we aim to democratize funding for global good.

## Appendices

- [Technical Specifications](https://github.com/muslimalfatih/collective-impact)
- Audit Reports (Post-Hackathon)
- Partner NGO Letters of Internet

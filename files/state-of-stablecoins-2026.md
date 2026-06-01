---
title: "The State of the Stablecoin Market and Players: 2025 in Review, 2026 in Motion"
description: "A full analyst report covering issuers, infrastructure, custody, rails, payments, regulation across 8 jurisdictions, tokenized deposits, and the unresolved questions shaping the next 18 months."
date: "2026-05-23"
author: "The OwenPay Team"
authorRole: ""
tag: "Analyst Report"
readTime: "25 min read"
---

Stablecoins crossed from "crypto plumbing" to global settlement infrastructure in 2025. Total on chain transaction volume hit roughly $33 trillion for the year, up 72 percent year over year (Artemis Analytics, reported by Bloomberg). For reference, Visa processed $16.7 trillion in its fiscal year 2025. Total market capitalization sat at approximately $320.6 billion in May 2026, up from $205 billion at the start of 2025 (KuCoin, DefiLlama).

But the headline numbers obscure the story that actually matters for operators, treasurers, and policymakers. The market has stratified into a full stack ecosystem with distinct roles at each layer, and the open questions about how that stack interconnects are far from settled.

![Total stablecoin market cap, Jan 2025 to May 2026](/blog-images/state-of-stablecoins/01_market_cap_growth.png)

This report covers seven layers of that stack and the unresolved issues that will define the next 18 months.

1. **Issuers**, where two firms still control roughly 88 to 93 percent of supply, but the challenger tier has genuine momentum.
2. **Issuance and orchestration platforms**, which have collapsed the time to launch a custom stablecoin from years to weeks.
3. **Custodians**, where bank chartered firms now sit alongside MPC native crypto firms with different risk profiles.
4. **Settlement rails**, where Tron still moves more stablecoin volume than every other chain combined.
5. **The payments layer**, where Visa and Mastercard have moved from spectators to acquirers.
6. **Regulators**, with the U.S. GENIUS Act now law, MiCA in force, and parallel frameworks active in Hong Kong, Singapore, Japan, and the UAE.
7. **Tokenized deposits**, which banks are positioning as a parallel rail with bank balance sheet protection and the ability to pay interest.

> **Bottom Line:** The unresolved issues are not technical. They are structural: build versus rent, the yield prohibition and its third party loophole, fraud vectors that are not chargebacks but are no less expensive, UX fragmentation across chains and wallets, and the open question of whether stablecoins or tokenized deposits become the default for institutional flows.

## Section 1: Market Size and Velocity

The basic numbers worth anchoring on:

* Total stablecoin market cap: approximately $320.6 billion in May 2026, per KuCoin's tracking citing DefiLlama and CoinGecko data.
* 2025 annual transaction volume: approximately $33 trillion (Artemis Analytics, reported by Bloomberg January 2026).
* Q4 2025 volume alone: approximately $11 trillion, up from $8.8 trillion in Q3 2025.
* Stablecoins represented approximately 30 percent of all on chain crypto transaction volume in 2025 (StablecoinInsider compilation of multiple sources).

The $33 trillion figure overstates real economic activity. Artemis and other on chain analytics firms note that 60 to 80 percent of raw on chain stablecoin volume reflects bot activity, intra exchange transfers, and DeFi protocol flows rather than commerce or settlement. Visa's own onchain analytics dashboard publishes an "adjusted" figure that strips these out, putting "real" 2025 stablecoin volume at approximately $9 trillion. Even that adjusted number puts stablecoins on par with the entire ACH network's annual flow.

![Stablecoin transaction volume vs traditional rails, 2025](/blog-images/state-of-stablecoins/03_stablecoins_vs_visa.png)

Forecasters disagree on where this goes. Standard Chartered projects total stablecoin supply at $2 trillion by end of 2028. Citi's bull case puts it at $3.7 trillion. Bernstein lands at $4 trillion. The Treasury Borrowing Advisory Committee assumes $2 trillion. These ranges are wider than is usual for top tier financial forecasting, which tells you something about how new the regulated era is.

## Section 2: The Issuer Landscape

### Tier 1: The duopoly

Tether and Circle still control the market by capitalization.

![Issuer market share by capitalization](/blog-images/state-of-stablecoins/02_issuer_market_share.png)

**Tether (USDT)**

* Market cap: approximately $185 to $188 billion as of May 2026
* Market share: approximately 58 to 60 percent
* 2025 growth: 36 percent year over year
* Regulatory status: not MiCA compliant. Delisted from EEA spot trading at major venues between December 2024 and March 2025. Launching a separately structured U.S. compliant variant (USAT) to operate alongside USDT under the GENIUS Act framework.

USDT remains the deepest liquidity instrument in crypto and the dominant quote currency on centralized exchanges. Daily trading volumes routinely exceed $60 billion. When users want to exit risk fast, they exit into USDT.

**Circle (USDC)**

* Market cap: approximately $75 to $78 billion in Q1 2026
* Market share: approximately 24 to 25 percent
* 2025 growth: 73 percent, outpacing USDT's 36 percent for the second consecutive year (CoinDesk citing CoinDesk Data)
* Corporate status: NYSE listed since June 2025 (ticker CRCL)
* Regulatory status: MiCA compliant under EMI authorization (France, July 2024). The only top ten stablecoin currently compliant with EU rules.
* Transaction volume: per a Mizuho analyst report (March 2026), USDC processed approximately $2.2 trillion in adjusted transaction volume year to date in 2026 versus $1.3 trillion for USDT. First time since 2019 that USDC led on volume.

The volume crossover is the most important issuer development since GENIUS. If real economic usage is what determines the long term winner, USDC is winning where it matters even though USDT is still bigger by market cap.

![USDT vs USDC: market cap leader, volume challenger](/blog-images/state-of-stablecoins/04_usdt_usdc_crossover.png)

### Tier 2: Credible challengers

**Ethena USDe**

* Market cap: approximately $6.3 billion in May 2026, third largest stablecoin overall
* Design: synthetic dollar backed by a delta neutral basis trade (long staked ETH plus short ETH perpetual futures)
* Yield: sUSDe (the staked version) currently pays approximately 9.4 percent on a seven day trailing basis (Ethena published data, April 2026)
* Regulatory positioning: not a payment stablecoin under GENIUS terminology. The yield prohibition does not directly apply. SEC posture toward yield distributing tokens is the largest tail risk.

USDe is the most economically distinctive issuer in the top five. It is also the riskiest at the margin. The yield depends on perpetual futures funding rates, which can go negative, and the reserve fund sits at roughly 1.18 percent of total value locked.

**World Liberty Financial USD (USD1)**

* Market cap: approximately $4.66 billion as of late May 2026 (CoinMarketCap)
* Launched: March 2025, less than 14 months old
* Custody: BitGo Trust Company
* Backing: 1:1 cash and short term U.S. Treasury securities
* Corporate status: parent WLTC Holdings filed a de novo OCC application for a national trust bank (WLTC, N.A.) in early 2026
* Notable: gained early scale via a $2 billion settlement payment from Abu Dhabi sovereign fund MGX into Binance, a transaction that drew congressional scrutiny over conflict of interest given the Trump family affiliation

USD1 is the political stablecoin. Its trajectory will depend more on whether the regulatory architecture remains favorable than on competitive positioning.

**PayPal USD (PYUSD)**

* Market cap: approximately $4.1 billion in May 2026
* 2025 growth: 680 percent year over year, the fastest growing top tier stablecoin
* Distribution: extended to 70 international markets March 2026
* Key integrations: YouTube creator payouts (Dec 2025), Visa Direct cross border remittance (Jan 2026)
* Yield: $1 billion USDAI incentive program at 4.5 percent deposit yield (delivered through PayPal's affiliated yield program, not the issuer)

PYUSD's growth rate is the highest in the top five, but it starts from a small base. The strategic value sits in distribution: PayPal has 400+ million users globally and is one of the few stablecoins natively built into a major consumer finance app.

**Ripple USD (RLUSD)**

* Market cap: approximately $1.75 billion as of mid 2026
* Custody: BNY Mellon for the reserve, plus institutional grade attestation
* Distribution: Deutsche Bank custody integration, BlackRock partnership for tokenized money market fund linkage
* Use case: cross border payments through RippleNet, settlement layer for institutional clients

RLUSD is the cleanest institutional play among the challenger tier. Smaller cap, but the design choices (BNY Mellon custody, NYDFS chartered issuer, conservative reserve composition) are calibrated for risk averse treasury operations.

### Tier 3: Bank issued and emerging

The bank tier is small today but matters more strategically than its current size suggests:

* **Global Dollar Network (USDG)**: issued by Paxos. Distribution coalition includes Robinhood, Kraken, Galaxy Digital, Anchorage Digital, Bullish, Mastercard, Worldpay.
* **SoFi USD (SoFiUSD)**: announced March 2026 partnership with Mastercard. Targets credit and debit settlement.
* **First Digital USD (FDUSD)**: Hong Kong issuer, regulated under the Stablecoins Ordinance.
* **Sky USDS (formerly DAI)**: $4.5 billion. The only meaningful crypto collateralized stablecoin left in the top tier.
* **EURC** (Circle), **EURI** (Banking Circle), **EURCV** (Société Générale): the leading MiCA compliant euro stablecoins.

![Growth rates by issuer, 2025 to Q1 2026](/blog-images/state-of-stablecoins/06_growth_by_issuer.png)

## Section 3: The Infrastructure Stack

The stablecoin stack now mirrors the layered architecture of traditional payments. Reserves, issuance, custody, settlement rails, cross chain interoperability, orchestration, and application. Each layer has distinct economics and a distinct competitive structure.

### Issuance and orchestration platforms

The most important infrastructure development of 2024 to 2025 was the maturation of platforms that let any enterprise launch a stablecoin in weeks rather than years. The active platforms:

* **Bridge** (acquired by Stripe for $1.1 billion in October 2024): the dominant U.S. stablecoin issuance and payments platform. Powers MetaMask's mUSD (launched October 2025), Stripe Issuing, and dozens of corporate stablecoins. Reportedly processed over $5 billion in annual volume before acquisition.
* **M0**: protocol layer that decouples reserve management from token issuance. Raised a $40 million Series B in August 2025. Over $779 million in on chain supply minted on the platform. Bridge uses M0's protocol under the hood for issuance.
* **Brale**: U.S. regulated stablecoin issuance platform operating under money transmitter licenses. Multi chain orchestration including Algorand (added January 2026), Solana, Ethereum. Pricing starts at $10 per month with custom tiers for enterprises.
* **Paxos**: long standing regulated issuer (USDP, PYUSD on behalf of PayPal, USDG with Global Dollar Network). NYDFS trust charter.
* **Agora**: white label issuance backed by a reserve fund composed of cash, repos, and short term U.S. Treasuries. AUSD is its public token.
* **Bastion**: stablecoin agnostic infrastructure with on and off ramp APIs. Dibbs Trust subsidiary is NYDFS chartered; stablecoin issuance approval pending.
* **Crossmint**: orchestration layer offering wallet, on ramp, off ramp, and stablecoin payment APIs across 50+ chains. Powers MoneyGram's stablecoin remittance product (deployed in two months from contract signing to production). Customers include Mastercard, Worldpay, Western Union, Wirex.

The build versus rent question for enterprises is treated in Section 7. The short version: rent for almost everyone except the largest institutions with dedicated engineering and compliance teams.

### Custodians

Custody is where institutional money sits, and where the GENIUS Act's reserve and segregation requirements concentrate their operational weight. The active custodians:

* **Fireblocks**: MPC based infrastructure platform connecting more than 2,000 institutions. Supports USDC, USDT, USDP, PYUSD, DAI, FDUSD, RLUSD, and tokenized money market funds including BlackRock BUIDL, Franklin Templeton BENJI, and Ondo USDY. Coverage spans approximately 90 chains as of Q1 2026. NYDFS limited purpose trust charter. Processed more than $7 trillion in cumulative transferred volume by mid 2024.
* **BitGo**: pioneered institutional multi signature custody in 2013. IPO'd in January 2026 (the first crypto custodian IPO). Received OCC national trust bank charter in December 2025. Up to $250 million insurance coverage. Operates regulated entities in the U.S., Europe, Singapore, and Switzerland.
* **Anchorage Digital**: federally chartered crypto bank (OCC, January 2021). Hardware security module based custody architecture. Q1 2026 default risk metrics put Anchorage and BitGo at parity (0.46% PD) per Agio Ratings.
* **Coinbase Custody**: NYDFS qualified custodian. Used for many U.S. ETF assets.
* **Copper**: UK based MPC custodian. Owns ClearLoop off exchange settlement.
* **Cobo**: APAC focused multi asset custody.
* **Fidelity Digital Assets**: OCC chartered, traditional finance backed.
* **BNY Mellon**: limited but expanding crypto custody operation following SAB 121 repeal.

Two regulatory shifts in 2025 changed this market. The SEC's repeal of SAB 121 (which had imposed prohibitive capital requirements on banks holding crypto for clients), and the GENIUS Act's clarification of custody standards. These together cleared the path for traditional banks to enter custody at scale.

### Settlement rails

Where stablecoin volume actually lives:

* **Tron**: approximately $3.3 trillion in stablecoin transactions across 2024 and 2025, more than every other chain combined. Hosts more than 60 percent of USDT supply. The operational backbone for emerging market remittances in Asia, Africa, and Latin America.
* **Ethereum**: approximately $1.2 trillion in stablecoin volume over the same period. The institutional default. Where RLUSD and most of USDC live.
* **Solana**: high throughput, low fee chain favored for retail and merchant payments. Settlement finality under 400 milliseconds. Approximately $0.7 trillion in stablecoin volume.
* **Binance Smart Chain**: distant but meaningful share.
* **Stellar**: payments optimized chain. PayPal, U.S. Bank, and Wirex run production workloads on Stellar. Stablecoin market cap on Stellar grew 53 percent year over year to $244 million driven by PYUSD.
* **Base** (Coinbase L2): rising USDC share (6.1 percent of total USDC supply per CoinLaw).
* **Plasma**: a stablecoin native L1 launched in 2024, optimized for stablecoin transfers and large institutional flows.
* **Tempo**: an emerging stablecoin payments optimized L1 partnered with Stripe and Visa.
* **Arc** (Circle's announced settlement chain): expected production launch in 2026.

![Where stablecoins actually move: volume by chain](/blog-images/state-of-stablecoins/05_volume_by_chain.png)

The competitive question among chains is no longer about total throughput. It is about which chain captures the institutional settlement workload that banks and card networks are bringing onchain. Visa's stablecoin settlement program expanded in April 2026 to nine blockchains including Base, Polygon, Canton Network, Arc, and Tempo, alongside existing Ethereum, Solana, Avalanche, and Stellar support.

### Cross chain interoperability

Cross chain is where the user experience either breaks or holds together. The active protocols:

* **Circle CCTP (Cross Chain Transfer Protocol)**: native USDC burn and mint across supported chains. The cleanest model architecturally because it does not rely on wrapped representations.
* **LayerZero, Wormhole, Hyperlane, Stargate, Polymer**: generalized cross chain messaging used by stablecoins that lack a native bridge.
* **Eco, Relay, Across, LI.FI, Jumper, Squid**: orchestration layers that decide which rail to use, optimize for cost and finality, and abstract the underlying complexity from the application.

The fragmentation problem is real. PYMNTS reported in 2025 that finance officers cite the proliferation of blockchains, lack of wallet interoperability, and absence of common settlement rails as the most cited barriers to enterprise stablecoin adoption.

## Section 4: The Payments Layer

This is where stablecoins meet the real economy, and where the most consequential competitive moves of 2025 and 2026 happened.

### Card networks: from spectators to acquirers

![Card networks moved from spectators to acquirers, 2025 to 2026](/blog-images/state-of-stablecoins/08_card_networks.png)

**Visa**

* Stablecoin settlement program: $7 billion annualized run rate as of April 2026, up 50 percent quarter over quarter
* Card linked stablecoin spend: $3.5 billion annualized run rate in Q4 FY 2025, up 460 percent year over year
* Settlement network expanded to nine blockchains in April 2026
* Stablecoin card programs live in more than 50 countries, with planned expansion to 100+ by year end

**Mastercard**

* Announced acquisition of **BVNK** for up to $1.8 billion in early 2026, the largest stablecoin focused acquisition on record
* SoFi partnership uses SoFiUSD as a network settlement option
* Multi Token Network supports stablecoins, tokenized deposits, and other tokenized money
* Targeting card transaction settlement in stablecoins (back end) without changing checkout UX (front end)

Both card networks have explicitly framed this as defensive infrastructure. They intend to be orchestrators of stablecoin flows, not casualties of them. The strategic logic: if AI agents and DeFi rails route around 2 to 3 percent interchange fees, the card networks need to be present at the settlement layer to capture some portion of the fee economics.

### Payment processors and merchant acquiring

The active processors handling production stablecoin payment volume in 2026:

* **Stripe** (via Bridge): full stack, U.S. centric. ~1.5% fees for U.S. businesses. The default for SaaS and marketplaces.
* **BVNK**: enterprise B2B, processes more than $30 billion annually at 0.3 to 2 percent fees. Now Mastercard owned (pending close).
* **BitPay**: operating since 2011. Multi crypto support. Next business day fiat settlement. Strong in merchant invoicing and retail point of sale.
* **Coinbase Commerce**: institutional grade with x402 protocol support for AI agent payments.
* **NOWPayments**: high risk merchant friendly, popular in iGaming. iGaming volume up 40 percent year over year. Stablecoins represent more than 50 percent of on chain iGaming volume in 2025.
* **Triple-A**: compliance forward processor, strong in APAC.
* **Conduit**: cross border B2B payments via stablecoin rails.
* **Fipto**: emerging European processor.
* **Yellow Card**: African focused payments and on ramps.

### On and off ramps

This is the layer most likely to break in production. Common ramp providers:

* **MoonPay, Ramp Network, Transak**: retail on ramps.
* **Anchorage, BitGo, Coinbase Prime**: institutional on and off ramps.
* **Mural, Mountain Protocol, Conduit**: corridor specific off ramps in LatAm and Asia.

The recurring failure mode at this layer, per the StablecoinInsider 2026 analysis, is not chain fees. It is redemption design, liquidity fragmentation, and operational support load when users cannot cash out cleanly.

### The agentic commerce layer

A specific subcategory worth flagging: tooling for AI agents to transact in stablecoins.

* **Crossmint**: SDK for wallet provisioning and stablecoin payments for AI agents, integrated with Solana Developer Platform.
* **Wirex Agents**: non custodial infrastructure for AI agents to issue stablecoin cards and execute autonomous payments.
* **Stripe + Tempo**: launched the Machine Payments Protocol with Anthropic, OpenAI, DoorDash, Shopify, Revolut, Visa, and Mastercard as initial partners. Enables AI agents to autonomously purchase services by consolidating micro transactions into single onchain settlements.
* **Coinbase x402**: open standard for AI agent initiated payments, now stewarded by the Linux Foundation.
* **Visa CLI**: command line interface allowing AI agents to trigger card payments directly through terminal environments.

This is the layer the market is most enthusiastic about and the hardest to size. Real production AI agent payment volume is small as of mid 2026.

## Section 5: The Regulatory Map

Stablecoin regulation went from speculative to enforceable across most major jurisdictions in the 18 months ending Q2 2026. Eight frameworks are now active or in late stage rulemaking. Convergence on framework, divergence on pace.

### United States: the GENIUS Act

Signed July 18, 2025 (Pub. L. 119, 27) after passing the Senate 68 to 30 and the House 308 to 122. Effective January 2027, or 120 days after final implementing rules.

Key provisions:

* Creates a federal regulatory perimeter for "payment stablecoins" and clarifies that compliant payment stablecoins are neither securities nor commodities.
* Permits only three categories of issuers. Subsidiaries of insured depository institutions, federally licensed nonbank issuers supervised by the OCC, and state qualified issuers (capped at $10 billion in outstanding tokens before federal oversight kicks in).
* Requires 100 percent reserves in cash, demand deposits, Treasury bills under 93 days, repos, and similar high quality liquid assets. Monthly attestation by registered public accountants.
* Prohibits issuers from paying yield or interest to holders. The third party loophole (whether exchanges or affiliates can pay yield on stablecoin holdings) is the subject of a March 2026 OCC notice of proposed rulemaking.
* Establishes resolution priority for holders ahead of other creditors in issuer bankruptcy.

The OCC issued its NPRM in February 2026. The Conference of State Bank Supervisors filed comments in April 2026 pushing back on aspects of the federal preemption framework. Final rules expected throughout 2026, with most provisions effective January 2027.

### European Union: MiCA in force

Markets in Crypto Assets Regulation Titles III and IV (covering asset referenced tokens and e-money tokens) effective June 30, 2024. Transitional period for existing tokens ends July 1, 2026.

Practical impact in 2026:

* USDT is not MiCA compliant. Tether has not pursued EU authorization. Major EU exchanges delisted USDT from spot trading between December 2024 and March 2025.
* USDC and EURC are MiCA compliant under Circle's French EMI authorization.
* The European Commission reopened the MiCA review in May 2026 to address operational implementation issues, particularly around custody and cross border passporting.

### Hong Kong: small, controlled cohort

Stablecoins Ordinance effective August 1, 2025. HK$25 million minimum capital. HKMA received 36 applications in the first window. Only 2 licenses granted in the first round (May 2026). The regulator has been explicit: the goal is a small, controlled cohort, not broad market access.

### Singapore: MAS SCS Framework

Single Currency Stablecoin framework in force since 2023, expanded in 2025. High quality reserve assets, 1:1 redemption rights, capital requirements, direct MAS supervision.

### Japan: Payment Services Act amendments

PSA amendments effective June 2023, refined through 2026. Three issuer categories. MUFG, SMBC, and Mizuho are all active. JPYC classified April 2026. SBI/Startale JPYSC launching Q2 2026.

### United Kingdom

FCA released its consultation paper on crypto activities in December 2025. The Bank of England has signaled a preference for tokenized deposits over private stablecoins. Tokenized deposit pilots are live at HSBC, Lloyds, and NatWest.

### United Arab Emirates

Central Bank of UAE Payment Token Services Regulation in effect. AED denominated stablecoins permitted under license. HSBC began rolling out tokenized deposits in UAE in H1 2026.

### South Korea

Digital Asset Basic Act introduced April 2026. There is an active dispute between the Bank of Korea and the Financial Services Commission over a proposed 51 percent bank ownership requirement for stablecoin issuers.

![Stablecoin issuers as Treasury bill buyers](/blog-images/state-of-stablecoins/07_treasury_bill_holdings.png)

The macro consequence of these frameworks is that licensed stablecoin issuers have become significant buyers of short term U.S. Treasury debt. Issuer T-bill holdings sat at approximately $155 billion mid 2025 (per BIS Working Paper 1270). Standard Chartered projects this rises to approximately $1 trillion by end of 2028 in their base case. The U.S. Treasury Borrowing Advisory Committee has flagged stablecoin demand as a structurally meaningful new buyer of bills.

## Section 6: Tokenized Deposits

Tokenized deposits are the structural answer the banking industry is advancing in parallel to stablecoins. The mechanics are different. The competitive implications are larger than most operators realize.

A stablecoin is a bearer instrument on a public chain. Reserves sit off bank balance sheet. No FDIC coverage. No interest paid to holders under GENIUS. Permissionless transfer.

A tokenized deposit is a digital representation of a bank deposit liability. It sits on the bank's balance sheet. It carries FDIC coverage up to applicable limits. It can pay interest. It typically operates in permissioned environments. Transfer is constrained to participants the bank has KYC'd.

The active bank programs:

* **JPMorgan JPMD**: deposit token deployed on Base (Coinbase L2) in 2025. JPMorgan has framed JPMD as the institutional settlement layer for the bank's existing payment customers.
* **HSBC**: rolling out tokenized deposit infrastructure across Hong Kong, UK, and UAE. December 2025 announcement of euro denominated tokenized deposits.
* **Citi Token Services**: live in multiple jurisdictions, used by institutional clients for 24/7 cross border treasury operations.
* **Bank of America**: publicly preparing tokenized deposit infrastructure, with explicit reference to the GENIUS Act framework as the trigger.
* **Wells Fargo**: similar posture, less publicly disclosed.

The structural question is whether tokenized deposits or stablecoins win institutional flows. The Federal Reserve Bank of New York staff report (February 2026) noted that tokenized deposits "preserve the singleness of money" within the existing banking system, while stablecoins introduce a parallel monetary instrument with different legal and credit characteristics.

The practical answer in 2026 is that most large enterprises will need to support both. Stablecoins for cross border, cross institution flows where the counterparty is not on the same bank. Tokenized deposits for intra bank and bank to bank settlement where the participants are already in a permissioned network.

## Section 7: Unresolved Questions

Eight issues will decide the next 18 months.

### Issue 1: Build versus rent

The platforms (Bridge, M0, Brale, Agora, Paxos) have reduced the marginal cost of issuance enough that the build case only holds for institutions with multi billion dollar balance sheets, dedicated compliance teams, and a strategic reason to own the full stack. Even JPMorgan, with all of those, runs JPMD in part on public infrastructure (Base).

For most enterprises in 2026: rent.

### Issue 2: Yield, the prohibition, and the third party loophole

The GENIUS Act prohibits issuers from paying yield to holders. The Act is silent on whether exchanges, affiliates, or third party platforms can offer rewards or yield programs tied to stablecoin holdings.

The OCC's March 2026 proposed rule creates a rebuttable presumption that affiliates and "related third parties" paying yield to holders are engaged in impermissible structuring to evade the prohibition. The Bank Policy Institute and other bank trade groups support closing the loophole. Coinbase, Binance, and other exchanges that currently offer yield programs on stablecoin holdings have argued the prohibition should remain narrow.

The competitive stakes are high. If the third party loophole closes, the only legal path to yield on dollar pegged tokens is through synthetic dollars like USDe (which generates yield from delta neutral basis trades, not issuer reserves) or tokenized money market funds (which are classified as securities and trade differently). If it stays open, exchanges become the de facto distributor of stablecoin yield and the economics of holding USDC versus a bank deposit start to look very different.

Resolution timing: OCC final rules expected in 2026, with implementation through 2027.

### Issue 3: Chargebacks solved, fraud relocated

The pitch for stablecoins to high risk merchants is straightforward: no chargebacks. Datos Insights reports fraudulent chargebacks account for approximately 45 percent of global merchant chargeback volume. Mastercard projected U.S. merchant chargeback losses at $15 billion in 2025. Visa's 0.9 percent chargeback rate threshold triggers enrollment in dispute monitoring programs with $25,000 to $50,000 monthly charges and $100 per chargeback fines.

Stablecoin payments are push transactions. Once confirmed on chain, they are final. There is no central authority that can unilaterally reverse them.

But "no chargebacks" does not mean "no fraud." The fraud vectors shift:

* **Address poisoning and approval fraud**: customers send funds to wrong addresses or approve malicious smart contracts. These losses are absolute and not recoverable.
* **Off chain dispute resolution**: legitimate refund disputes still exist. Merchants must voluntarily return funds, and the operational process for handling that is less mature than card networks.
* **AML and Travel Rule compliance**: transfers above $1,000 require Travel Rule reporting. Sanctions screening, KYB on merchants, KYC on customers must all be handled by processors.
* **Illicit activity exposure**: TRM Labs reported in 2025 that approximately 60 percent of illicit crypto activity in Q1 2025 used stablecoins. The compliance overhead for processors is meaningful.

> The trade is straightforward to summarize. Stablecoins solve the merchant chargeback problem. They do not solve the merchant fraud problem. They relocate it.

### Issue 4: Speed to market

Custom stablecoin launches that took two to three years in 2022 now take two to eight weeks via platforms like Crossmint, Bridge, and M0. MoneyGram went from contract signing to live production in approximately two months. MetaMask launched mUSD in weeks.

Speed cuts both ways. The same infrastructure that lets a legitimate enterprise ship fast also lets undercapitalized, undercompliant issuers ship fast. The GENIUS Act's licensing requirements partially address this by gating issuance, but the bar to "qualified issuer" under state law remains lower than the federal bar.

### Issue 5: End user UX

The biggest practical barrier to consumer stablecoin adoption is the gap between current crypto wallet UX (private keys, gas fees, chain selection) and consumer expectations (one tap, no fees visible, deterministic settlement).

Smart accounts (ERC 4337), account abstraction wallets (Privy, Dynamic, Magic, Coinbase Smart Wallet, Phantom), and gas sponsorship (paymasters) have closed most of this gap technically. Adoption in mainstream consumer apps remains slow. The friction is now mostly distribution, not technology.

### Issue 6: Cross chain fragmentation

Stablecoins exist on dozens of chains. USDC alone deploys on more than 30. Liquidity on each chain is independent. Bridges, CCTP, and orchestrators (Eco, Relay, LI.FI) abstract this for users but introduce their own complexity and risk.

Cross chain transfer requires either a bridge, a native burn and mint protocol like CCTP, or an orchestration layer. PYMNTS reported in 2025 that finance officers identify cross chain fragmentation as a primary barrier to enterprise stablecoin adoption.

### Issue 7: Compliance burden

Money transmitter licensing in each U.S. state, GENIUS Act compliance, MiCA compliance, country specific licensing in Hong Kong, Singapore, Japan, and the UAE, Travel Rule reporting, sanctions screening, KYC and KYB, SOC 2 Type II, monthly attestations, annual audits.

Significant enough that build versus rent is increasingly a compliance decision, not a technical one.

### Issue 8: Agentic commerce

The Stripe / Tempo Machine Payments Protocol, Coinbase's x402 (now stewarded by Linux Foundation), and Wirex Agents position stablecoins as the default settlement layer for AI agent commerce. Visa CLI lets agents trigger card payments via terminal. Mastercard and Visa are partners in the protocol layer, not just acceptance.

*Directional bet:* AI agents will route through stablecoin rails because per transaction economics matter at machine speed.

*Directional risk:* real production volume from AI agents is small as of mid 2026. The category may not develop as quickly as the infrastructure is being built.

## Section 8: Trade Offs Worth Being Explicit About

For builders, treasurers, and policymakers, the choices are not symmetric.

**Compliance reach versus liquidity depth.** USDC is MiCA compliant and positioned for the GENIUS Act. USDT is not MiCA compliant but has unmatched depth in emerging markets and on Tron. A single stablecoin strategy is increasingly an artifact of inexperience, not optimization. Most sophisticated treasury operations hold more than one stablecoin sized to the jobs each does.

**Reserve transparency versus operational liquidity.** USDC publishes monthly attestations with Treasury CUSIP level detail. USDT publishes quarterly attestations with less granularity. When the Drift Protocol hack occurred in April 2026, Circle declined to freeze the compromised $232 million in USDC and faced a class action. Tether has never broken its peg and has not faced similar litigation. Each model carries costs.

**Yield versus stability.** USDe and similar synthetic dollars offer real yield (currently 9 to 12 percent on sUSDe). Yield is path dependent on perpetual futures funding rates. Payment stablecoins under GENIUS pay zero yield to holders. There is no free lunch.

**Bank issued versus crypto native.** Bank stablecoins and tokenized deposits offer deeper integration with traditional rails and deposit insurance considerations. They impose more onerous KYC, restricted programmability, and limited DeFi composability. Crypto native issuers offer the inverse.

**Build versus rent.** Build for control and economics, only when you have the scale, capital, and compliance team to justify it. Rent for almost everyone else in 2026.

**Stablecoins versus tokenized deposits.** Both are digital dollars on chain. Tokenized deposits stay on bank balance sheets, are FDIC insured, can pay interest, and operate in permissioned environments. Stablecoins sit off balance sheet, are bearer instruments on public chains, and cannot pay interest under GENIUS. The right answer for most enterprises is to support both for different use cases.

## Section 9: What to Watch Through Year End 2026

Twelve concrete items:

1. **OCC, FDIC, and Federal Reserve final rules under the GENIUS Act.** Expected throughout 2026. Will determine whether bank issued stablecoins launch in 2027 or slip.
2. **OCC final rule on the yield third party loophole.** Determines whether Coinbase, Binance, and others can continue offering stablecoin yield programs.
3. **MiCA review outcomes from the European Commission.** Reopened May 2026. Operational implementation, custody, cross border passporting are the live issues.
4. **Hong Kong second round of stablecoin licenses.** First round granted only 2 of 36 applicants. The pace of subsequent grants signals whether HK becomes a meaningful issuer hub.
5. **JPMorgan, HSBC, Citi, Bank of America tokenized deposit production launches.** Most are in pilot. Full production at any of the four would meaningfully shift institutional flow expectations.
6. **USDC versus USDT volume trajectory.** Q1 2026 was the first quarter USDC led on adjusted volume. Whether this holds through Q2 and Q3 2026 determines if it is a regime change or a one quarter anomaly.
7. **Tron volume share.** Tron currently hosts more than 60 percent of USDT. Any meaningful migration off Tron (to Ethereum, Solana, Base, or new chains) reshapes the issuer competitive map.
8. **Mastercard BVNK acquisition close.** Pending regulatory approval. The deal sets a market price for stablecoin payments infrastructure.
9. **PayPal PYUSD growth ceiling.** Up 680 percent year over year on a small base. Whether it can scale to $10 billion plus is the test of whether consumer distribution actually drives stablecoin scale.
10. **Ethena USDe regulatory positioning.** The SEC's view of yield distributing synthetic dollar tokens is the largest tail risk for the third largest stablecoin.
11. **Visa stablecoin settlement run rate.** Currently at $7 billion annualized. Whether this expands to $20 billion plus by year end determines whether card networks become the dominant institutional channel.
12. **AI agent payment volume measurement.** Real production agent volume in 2026 is currently below most published forecasts. Whether infrastructure precedes or follows actual demand is the open question.

## Conclusion

The stablecoin market in 2025 and 2026 is no longer the speculative frontier of crypto. It is a regulated, multi tiered ecosystem with distinct economics at each layer, two dominant issuers facing real competition for the first time, eight active regulatory frameworks, and growing participation from card networks and banks.

The strategic question for any operator, treasurer, or policymaker engaging this market in 2026 is no longer whether stablecoins matter. The transaction volume, the GENIUS Act, the MiCA implementation, and the entry of Visa, Mastercard, JPMorgan, HSBC, Citi, and PayPal have answered that.

The strategic question is which layer to play at, which issuer to integrate, which regulatory regime to anchor in, and how to handle the trade offs that remain unresolved.

The next 18 months will determine whether the duopoly entrenches further, whether banks reclaim some of the float economics through tokenized deposits, whether yield bearing synthetic dollars carve out a durable third lane, and whether the agentic commerce thesis converts to real volume.

The trajectory is no longer in doubt. The market structure is.

---

### Sources

**Market data**

* Artemis Analytics 2025 stablecoin transaction data, reported by Bloomberg (January 2026)
* KuCoin market cap tracking citing DefiLlama and CoinGecko data
* CoinLaw, CoinGecko, CoinMarketCap, DefiLlama for issuer specific market cap data
* TRM Labs 2025 Crypto Adoption and Stablecoin Usage Report

**Regulatory**

* GENIUS Act text, Congress.gov (S.1582, Pub. L. 119, 27)
* OCC Notice of Proposed Rulemaking on the GENIUS Act, February 2026 (Bulletin 2026, 3)
* CSBS GENIUS Act Implementation Comment Letter
* MiCA Regulation (EU) 2023/1114 and ESMA Level 2 technical standards
* Hong Kong Stablecoins Ordinance, Cap. 656, effective August 1, 2025
* Singapore MAS Single Currency Stablecoin Framework
* Japan FSA Payment Services Act amendments
* UAE Central Bank Payment Token Services Regulation
* UK FCA Consultation Paper on Crypto Activities, December 2025
* European Commission MiCA Review, May 2026

**Issuers**

* Tether quarterly attestations
* Circle USDC Economy Outlook (Q1 2026)
* Ethena Labs official protocol documentation
* World Liberty Financial press releases
* PayPal PYUSD expansion announcement, March 2026
* Ripple RLUSD attestation reports

**Infrastructure**

* Bridge / Stripe Open Issuance documentation
* M0 protocol documentation and PYMNTS reporting on Series B funding
* Brale Algorand expansion announcement, January 2026
* Crossmint product documentation and partner network disclosures
* Fireblocks Network institutional data
* Agio Ratings Q1 2026 custodian default risk rankings

**Payments and card networks**

* Visa stablecoin settlement expansion announcements (April 2026)
* Mastercard BVNK acquisition announcement and Multi Token Network documentation
* Bank of America analyst note on onchain banking shift (December 2025)
* SoFi Mastercard SoFiUSD partnership announcement (March 2026)

**Treasury market and tokenized deposits**

* BIS Working Paper 1270, Stablecoins and Safe Asset Prices
* Federal Reserve Bank of Kansas City Economic Bulletin on stablecoin Treasury exposure
* Brookings working paper on stablecoins and U.S. Treasury markets (October 2025)
* TD Securities Impact of Stablecoins and Digital Assets in the U.S.
* Standard Chartered research desk projections
* JPMorgan Kinexys product documentation
* New York Fed staff report on stablecoins versus tokenized deposits (February 2026)

---

*This report is for informational purposes. OwenPay does not endorse any specific stablecoin, issuer, or platform mentioned. Readers should conduct their own diligence before making business or compliance decisions.*

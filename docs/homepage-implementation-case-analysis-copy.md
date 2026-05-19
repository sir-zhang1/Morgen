# Personal Site — Implementation & Case Analysis Copy Export

> **Generated:** 2026-05-19  
> **Purpose:** Single source for editing homepage **Implementation** and **Case Analysis** copy (homepage cards + detail pages). Paste into Helm project AI, revise, then sync back to Morgen repo sources listed below.  
> **Site:** [morgen personal site](d:\self_introduce\Morgen) · **Product:** helm.trading (Solana Devnet)

---

## How copy maps to the site

| Surface | Implementation | Case Analysis |
|--------|----------------|---------------|
| **Homepage** | [`src/config/index.ts`](../src/config/index.ts) → `work.implementation` | [`src/content/primitives/*.md`](../src/content/primitives) frontmatter + [`Primitives.astro`](../src/components/Primitives.astro) |
| **Detail page** | *(no separate route — all on homepage)* | [`/primitives/helm`](../src/content/primitives/helm.md), [`predictive-modeling`](../src/content/primitives/predictive-modeling.md), [`semantic-graph`](../src/content/primitives/semantic-graph.md) |
| **Detail URL** | — | `/primitives/{id}` (e.g. `/primitives/helm`) |

### UI chrome (not in config — change in Astro if needed)

| Location | Text |
|----------|------|
| Work sub-section | `Implementation` |
| Implementation label | `User journey` |
| Case section title | `Case Analysis` |
| Card CTA | `Read full primitive →` |
| Detail back link | `← Case Analysis` |
| Detail eyebrow | `Core Primitive` |
| Detail footer nav | `Previous` / `Next` |

---

## Part A — Implementation (homepage only)

**Source file:** `Morgen/src/config/index.ts` → `SITE_CONTENT.work.implementation`

### Section heading (Work.astro)

- **Implementation**

### Three pillar cards (homepage)

#### Card 1 — AI product line

**Title:** AI product line

**Body:**
> A three-stage AI roadmap on one terminal—from market research to wallet-signed execution to portfolio-level analysis. V1 Trading Research — streamed Q&A before capital at risk · V2 Trading Assistant — plain language to reviewable orders you sign · V3 Trading Analyst — holdings briefs and exit planning across open, close, and copy flows.

#### Card 2 — Copy Trading

**Title:** Copy Trading

**Body:**
> Leaders trade; followers mirror automatically—with wallet-authorized funding and settlement kept in sync with the leader book. Gurus surface through rankings and relationships, and trades propagate on Square as discoverable social proof.

#### Card 3 — Create Markets

**Title:** Create Markets

**Body:**
> Anyone eligible can launch binary prediction markets, expanding long-tail supply beyond protocol listings. Creators earn fees as markets trade and withdraw earnings to their own wallets—non-custodial by design.

### User journey (homepage — 8 steps, snake timeline)

**Section label:** User journey

| # | Label | Body |
|---|--------|------|
| 01 | Discover | Browse home, protocol listings, rolling crypto hourlies, and picks tuned to the session—find a market worth a view. |
| 02 | Trade | Place market or limit orders, track live PnL, climb the leaderboard, and share results with QR-backed cards. |
| 03 | AI | Start with research chat, graduate to language-to-order drafts you approve and sign, then use portfolio briefs to plan exits and copy-aware actions. |
| 04 | Copy | Follow ranked Gurus, turn on mirroring, and see leader activity in the hub and on Square—follower fills stay aligned with leader outcomes. |
| 05 | Create | Launch a market through guided checks and moderation, earn fees as volume accrues, and withdraw on-chain to your wallet. |
| 06 | Square | Post, comment, and like around real positions; signed posts and trade attachments make the feed a distribution layer for conviction. |
| 07 | Growth | Link X, Discord, or Telegram to the same wallet profile; earn points, referrals, and mission rewards while onboarding stays faucet-friendly. |
| 08 | Trust | Connect a Solana wallet, sign every money move, claim through automated payout jobs, and build reputation on-profile. |

### Closing one-liner (below timeline)

> A full-stack prediction market terminal—creator supply, a staged AI stack from research to execution, and social copy distribution—built non-custodial on Solana.

---

## Part B — Case Analysis (homepage cards)

**Source:** frontmatter in `src/content/primitives/*.md` (rendered by `Primitives.astro`)  
**Order:** `order` field (1 → 3)

---

### Card 1 — Trust · On-chain

**Route:** `/primitives/helm`  
**Source file:** `src/content/primitives/helm.md`

| Field | Current copy |
|-------|----------------|
| **role** (eyebrow) | Helm · Trust |
| **title** | Trust · On-chain |
| **subtitle** | Money moves on-chain; users never surrender keys. |
| **description** (card blurb) | Opening a trade means the wallet signs collateral into protocol treasury; wins and creator earnings pay out through automated on-chain jobs. Every flow is traceable on Solana—non-custodial by design. |
| **CTA** | Read full primitive → |

---

### Card 2 — Scale · Off-chain

**Route:** `/primitives/predictive-modeling`  
**Source file:** `src/content/primitives/predictive-modeling.md`

| Field | Current copy |
|-------|----------------|
| **role** | Helm · Scale |
| **title** | Scale · Off-chain |
| **subtitle** | 14.0M+ orders through one API and database layer. |
| **description** | Markets, orders, copy relationships, and payout queues run in Postgres with serverless APIs and scheduled jobs. An automation layer fills limits, patrols positions, and mirrors leader trades while reconciling chain signatures to rows. |
| **CTA** | Read full primitive → |

---

### Card 3 — Growth · In-product

**Route:** `/primitives/semantic-graph`  
**Source file:** `src/content/primitives/semantic-graph.md`

| Field | Current copy |
|-------|----------------|
| **role** | Helm · Growth |
| **title** | Growth · In-product |
| **subtitle** | Create markets, trade with AI, copy leaders—one surface. |
| **description** | A React terminal with wallet connect, staged AI from research to signed orders, permissionless creator markets, copy hub plus Square for social distribution, and wallet-native growth loops. |
| **CTA** | Read full primitive → |

---

## Part C — Case Analysis (detail pages — full body)

Detail pages repeat **role, title, subtitle, description** in the hero (`PrimitiveArticle.astro`), then render the markdown body below.

---

### Detail 1 — On-chain Settlement (`helm.md`)

**Hero (from frontmatter — same as card):**

- role: Helm · On-chain  
- title: On-chain Settlement  
- subtitle: Capital moves on-chain; winners and creators get paid in HELM.  
- description: User wallets sign SPL transfers into the protocol treasury on open, and authenticated settle flows unlock keeper-driven payouts. Creator fee withdrawals settle as on-chain HELM to creator wallets—non-custodial by design.

**Body (markdown):**

This layer owns **verifiable capital flows on Solana**—collateral in, payouts out. Order matching and book state live off-chain; here the product proves that money moved with wallet signatures and protocol treasury discipline.

**HELM V3** is the settlement asset. Payouts are treasury-backed and automated through the keeper pipeline—not a custom on-chain prediction market program.

#### What this layer owns

Helm does not ship a bespoke Anchor program for market matching in this stack. Differentiation on-chain is **SPL HELM transfers**, **Memo-authenticated** open and settle flows, and a **protocol treasury** that pays winners and creators. If you cannot trace collateral and payout on Solana, you cannot trust the terminal.

#### Open trade

To open a position, the user signs an SPL transfer of margin into the protocol treasury, paired with a Memo payload that authenticates the intent (open trade, market, side, size). The wallet always initiates the transfer—Helm never holds keys.

#### Close and claim

Closing or claiming follows the same pattern: a user-signed Memo authorization transaction (with an optional SOL network fee), which unlocks off-chain settlement logic and enqueues payout work. Database state records the outcome; this layer executes the HELM movement.

#### Payouts

A keeper-style pipeline moves HELM from the protocol treasury to user associated token accounts. Payout rows are tracked and reconciled against chain signatures so missed transfers can be detected and repaired.

#### Copy mirror (on-chain leg)

Social copy-trading has an on-chain leg: followers can grant delegated SPL approval so mirror transfers execute under explicit delegation rules. Attribution and follower order rows are recorded off-chain; the chain leg proves collateral moved for mirrored opens.

#### Creator economics (on-chain leg)

Creator fees accrue off-chain as markets trade and settle. Withdrawals are prepared and confirmed as SPL transfers from the creator treasury path to creator wallets—again wallet-signed and non-custodial.

#### Token

Settlement today uses **HELM V3** on Solana. Earlier HELM mint generations exist for historical beta iterations; the product narrative treats V3 as the current settlement asset for new flow.

#### Tech stack

- Solana: `@solana/web3.js`, `@solana/spl-token`
- Programs invoked: **SPL Token**, **Memo**, ComputeBudget, SystemProgram
- Patterns: wallet-signed SPL margin, Memo-authenticated open/settle, treasury → user ATA payouts
- Copy on-chain: delegated SPL `approve` + mirror transfer for followers
- Non-custodial by design: no protocol custody of user keys

---

### Detail 2 — Off-chain Infrastructure (`predictive-modeling.md`)

**Hero (from frontmatter):**

- role: Helm · Platform  
- title: Off-chain Infrastructure  
- subtitle: 14.0M+ orders processed through a unified API and database layer.  
- description: Markets, orders, copy relationships, and payout jobs live in Postgres with Next.js API routes and Vercel crons. A Keeper patrols open positions; copy V2 mirrors leader fills and reconciles chain signatures to order rows.

**Body (markdown):**

This layer is the **trading state machine, automation, and scale** behind the terminal. Helm has processed **14.0M+ orders** through a unified API and database layer—high-throughput order processing without an on-chain matching engine.

#### Runtime

The product ships as a **Next.js** application on **Vercel**: App Router API routes, serverless handlers, and scheduled crons. There is no separate Go or Rust trading service; scale comes from Postgres discipline, background jobs, and efficient API design.

#### Database

**Supabase (PostgreSQL)** holds the system of record: `orders`, `protocol_markets`, `ugc_markets`, `profiles`, `copy_relationships`, `copy_order_links`, `payout_transfers`, `trade_drafts`, `points_ledger`, and UGC rate-limit state. Row-level security and Realtime support feeds and social surfaces.

#### Order flow

After a user's open transaction is verified on-chain, the API records `OPEN_TRADE` / `FILL_PENDING` rows. Economics caps and trading limits enforce risk boundaries before rows enter the live book. Limit fills and position management are driven by server automation—not on-chain order matching.

#### Pricing and fills

A **server-side pricing engine** plus a **Keeper** patrol open positions: limits, take-profit/stop-loss, and market closes. This is transparent market rules executed in application logic, not an AMM or CLOB deployed as a Solana program.

#### Reconciliation

"Indexer-style" here means **matching chain signatures to database rows**: orders, copy intents, and payout transfers are reconciled on a schedule. Crons patrol copy-trading state, payout queues, and keeper sync so drift between chain, DB, and user-facing balances is detectable and repairable.

#### Copy mirror engine

**Copy V2** ingests leader open/close events, reads `copy_relationships`, and creates follower orders tagged as mirror-sourced. The on-chain leg handles delegated transfers; this layer owns timing, attribution, and follower order lifecycle.

#### Market data and anti-abuse

Market prices are served through **verified external price feeds** via API—not on-chain oracle programs in this repository. Explore and hot markets combine database catalog with import pipelines. Anti-abuse spans UGC rate limits (Postgres RPC), Turnstile, eligibility checks, moderation, referral banlists, and copy risk pause—operational rules, not on-chain program logic.

#### Tech stack

- **Framework:** Next.js 13.5, TypeScript, Vercel serverless + Cron
- **Database:** Supabase (PostgreSQL, RLS, Realtime)
- **Cache:** `unstable_cache`, in-memory rate limits
- **RPC:** multi-endpoint fallback pool for transaction confirmation
- **Automation:** Keeper patrol, copy reconcile, feed broadcast crons
- **Scale metric:** 13.5M+ orders processed (beta)  ← **inconsistent with subtitle 14.0M+**

---

### Detail 3 — Client + AI Experience (`semantic-graph.md`)

**Hero (from frontmatter):**

- role: Helm · Product  
- title: Client + AI Experience  
- subtitle: Launch markets, turn language into trades, and follow the best—without giving up your keys.  
- description: React terminal with Solana wallet connect, Gemini-powered TradeDraft cards that prefill the order ticket, and Square for social distribution. Growth loops tie wallet profiles to points, referrals, and OAuth-verified missions.

**Body (markdown):**

This layer is how conviction becomes action: a **professional terminal UX** to create markets, draft trades with AI, copy leaders, and share on Square—without giving up your keys.

**Creator Markets · TradeDraft · Copy + Square** are the hero capabilities on the surface; execution still flows through wallet-signed transactions and the off-chain state machine.

#### Terminal UI

The shell covers home, market pages, the trading panel, portfolio, leaderboard, and copy-trading hub. The goal is desk-grade speed and clarity—a market view and order ticket built for prediction markets, not a generic swap UI.

#### Wallets

Users connect via the **Solana Wallet Adapter** (Phantom, Backpack, Solflare, and others). The wallet address is the primary identity anchor for profiles, points, referrals, and copy relationships.

#### TradeDraft

**TradeDraft** turns natural language into structured trade drafts: the API returns Zod-validated JSON that prefills the order ticket. The user reviews and **signs with their wallet**—Helm does not custody keys and does not auto-sign. AI drafts trades; you execute.

#### Creator Markets

Creators launch binary markets through a guided flow: signed create requests, bot protection, and eligibility gates before a market enters the catalog. Economics and fee accrual tie into settlement and on-chain creator withdrawals.

#### Square

**Square** is the social distribution layer: feeds, posts with trade attachments, and signed posts so discourse stays tied to real positions. Discovery and narrative compound with the trading graph instead of living in a separate app.

#### Copy UX

Guru discovery, one-tap follow relationships, and feed intents connect social proof to the mirror engine. Followers see leaders' edge; the product handles relationship state and mirror triggers behind the scenes.

#### Growth

Points, referrals, and OAuth-verified missions (Discord, X, Telegram) attach to the **same wallet-native profile graph** as trading. Growth loops are honest about identity: experiments do not outrun settlement reality.

#### Tech stack

- **UI:** React 18, Tailwind CSS, shadcn/ui / Radix, Framer Motion / GSAP
- **App:** Next.js App Router (home, trading, square routes)
- **Wallets:** `@solana/wallet-adapter-*`
- **AI:** Google Gemini 2.5 Flash for trade-draft generation; Zod-validated draft schema
- **Social & growth:** Square feed, rewards ledger, referral and OAuth auth APIs

---

## Known inconsistencies (fix when editing)

| Issue | Location |
|-------|----------|
| Orders count **14.0M+** (subtitle/body intro) vs **13.5M+** (Tech stack bullet) | `predictive-modeling.md` |
| Colloquial phrases ("conviction becomes action", "one-tap follow") | `semantic-graph.md` body — may conflict with site tone rules |
| Filename `semantic-graph.md` vs title **Growth · In-product** | content slug ≠ display title (routes unchanged) |

---

## Sync back after Helm AI edits

1. **Implementation** → paste revised pillars, journey steps, one-liner into `Morgen/src/config/index.ts` (`work.implementation`).
2. **Case cards** → update YAML frontmatter (`role`, `title`, `subtitle`, `description`) in each `src/content/primitives/*.md`.
3. **Case detail bodies** → update markdown below the `---` frontmatter in the same files.
4. Optional UI strings → `Work.astro`, `Primitives.astro`, `PrimitiveArticle.astro`.

---

*End of export.*

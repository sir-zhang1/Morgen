---
title: "Off-chain Infrastructure"
role: "Helm · Platform"
subtitle: "13.5M+ orders processed through a unified API and database layer."
order: 2
pubDate: 2026-05-18
description: "Markets, orders, copy relationships, and payout jobs live in Postgres with Next.js API routes and Vercel crons. A Keeper patrols open positions; copy V2 mirrors leader fills and reconciles chain signatures to order rows."
---

This layer is the **trading state machine, automation, and scale** behind the terminal. Helm has processed **13.5M+ orders** through a unified API and database layer—high-throughput order processing without an on-chain matching engine.

## Runtime

The product ships as a **Next.js** application on **Vercel**: App Router API routes, serverless handlers, and scheduled crons. There is no separate Go or Rust trading service; scale comes from Postgres discipline, background jobs, and efficient API design.

## Database

**Supabase (PostgreSQL)** holds the system of record: `orders`, `protocol_markets`, `ugc_markets`, `profiles`, `copy_relationships`, `copy_order_links`, `payout_transfers`, `trade_drafts`, `points_ledger`, and UGC rate-limit state. Row-level security and Realtime support feeds and social surfaces.

## Order flow

After a user’s open transaction is verified on-chain, the API records `OPEN_TRADE` / `FILL_PENDING` rows. Economics caps and trading limits enforce risk boundaries before rows enter the live book. Limit fills and position management are driven by server automation—not on-chain order matching.

## Pricing and fills

A **server-side pricing engine** plus a **Keeper** patrol open positions: limits, take-profit/stop-loss, and market closes. This is transparent market rules executed in application logic, not an AMM or CLOB deployed as a Solana program.

## Reconciliation

“Indexer-style” here means **matching chain signatures to database rows**: orders, copy intents, and payout transfers are reconciled on a schedule. Crons patrol copy-trading state, payout queues, and keeper sync so drift between chain, DB, and user-facing balances is detectable and repairable.

## Copy mirror engine

**Copy V2** ingests leader open/close events, reads `copy_relationships`, and creates follower orders tagged as mirror-sourced. The on-chain leg handles delegated transfers; this layer owns timing, attribution, and follower order lifecycle.

## Market data and anti-abuse

Market prices are served through **verified external price feeds** via API—not on-chain oracle programs in this repository. Explore and hot markets combine database catalog with import pipelines. Anti-abuse spans UGC rate limits (Postgres RPC), Turnstile, eligibility checks, moderation, referral banlists, and copy risk pause—operational rules, not on-chain program logic.

## Tech stack

- **Framework:** Next.js 13.5, TypeScript, Vercel serverless + Cron
- **Database:** Supabase (PostgreSQL, RLS, Realtime)
- **Cache:** `unstable_cache`, in-memory rate limits
- **RPC:** multi-endpoint fallback pool for transaction confirmation
- **Automation:** Keeper patrol, copy reconcile, feed broadcast crons
- **Scale metric:** 13.5M+ orders processed (beta)

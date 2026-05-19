---
title: "Scale · Off-chain"
role: "Helm · Scale"
subtitle: "14.0M+ orders through one API and database layer."
order: 2
pubDate: 2026-05-18
description: "Markets, orders, copy relationships, and payout queues run in Postgres with serverless APIs and scheduled jobs. An automation layer fills limits, patrols positions, and mirrors leader trades while reconciling chain signatures to rows."
---

**Scale is the engine.** Helm has processed **14.0M+ orders** through a single off-chain trading stack—high throughput, consistent lifecycle handling, and reconciliation that keeps chain, database, and UI aligned. **Trust · On-chain** proves money moved; this layer proves the product can sustain prediction-market traffic at production volume.

## Unified platform stack

Markets, orders, copy relationships, payout queues, profiles, and social graph state share one **PostgreSQL (Supabase)** system of record, served by **Next.js on Vercel** with serverless APIs and scheduled jobs. Scale comes from schema discipline, background automation, and API design built for burst traffic—not from bolting on separate trading silos.

## Order lifecycle at volume

Once an open is verified on-chain, the platform records positions, enforces risk limits, and drives the full trade lifecycle—fills, updates, and closes—through the same pipeline that powers **14.0M+ orders**. Users get terminal-grade responsiveness; operators get a single place to monitor health, pause risk, and recover from drift.

## Reconciliation as defensibility

**Matching chain signatures to database rows** on a schedule: orders, copy intents, payouts, and position state. Crons patrol copy-trading, payout queues, and position sync so drift between chain, DB, and balances is detectable and repairable. For diligence: this is the operational backbone that makes non-custodial claims credible at volume.

## Copy at scale

**Copy V2** ingests leader open/close events, reads active relationships, and creates follower orders tagged as mirror-sourced. Timing, attribution, and follower lifecycle live here; delegated transfers live on-chain. Leaderboard and Guru discovery (**Growth**) sit on top; this layer makes mirroring reliable when leaders move fast.

## Operational trust (anti-abuse)

UGC rate limits, bot protection, eligibility, moderation, referral controls, and copy risk pause are **operational rules in Postgres**—how you scale permissionless creator supply without blowing up risk. Explore and featured markets combine catalog curation with import pipelines so discovery stays fresh as supply grows.

## Under the hood

- **Framework:** Next.js 13.5, TypeScript, Vercel serverless + Cron
- **Database:** Supabase (PostgreSQL, RLS, Realtime)
- **Cache / RPC:** `unstable_cache`, in-memory limits, multi-endpoint confirmation pool
- **Automation:** position patrol, copy reconcile, feed broadcast crons
- **Scale metric:** 14.0M+ orders processed (beta)

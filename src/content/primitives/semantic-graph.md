---
title: "Client + AI Experience"
role: "Helm · Product"
subtitle: "Launch markets, turn language into trades, and follow the best—without giving up your keys."
order: 3
pubDate: 2026-05-18
description: "React terminal with Solana wallet connect, Gemini-powered TradeDraft cards that prefill the order ticket, and Square for social distribution. Growth loops tie wallet profiles to points, referrals, and OAuth-verified missions."
---

This layer is how conviction becomes action: a **professional terminal UX** to create markets, draft trades with AI, copy leaders, and share on Square—without giving up your keys.

**Creator Markets · TradeDraft · Copy + Square** are the hero capabilities on the surface; execution still flows through wallet-signed transactions and the off-chain state machine.

## Terminal UI

The shell covers home, market pages, the trading panel, portfolio, leaderboard, and copy-trading hub. The goal is desk-grade speed and clarity—a market view and order ticket built for prediction markets, not a generic swap UI.

## Wallets

Users connect via the **Solana Wallet Adapter** (Phantom, Backpack, Solflare, and others). The wallet address is the primary identity anchor for profiles, points, referrals, and copy relationships.

## TradeDraft

**TradeDraft** turns natural language into structured trade drafts: the API returns Zod-validated JSON that prefills the order ticket. The user reviews and **signs with their wallet**—Helm does not custody keys and does not auto-sign. AI drafts trades; you execute.

## Creator Markets

Creators launch binary markets through a guided flow: signed create requests, bot protection, and eligibility gates before a market enters the catalog. Economics and fee accrual tie into settlement and on-chain creator withdrawals.

## Square

**Square** is the social distribution layer: feeds, posts with trade attachments, and signed posts so discourse stays tied to real positions. Discovery and narrative compound with the trading graph instead of living in a separate app.

## Copy UX

Guru discovery, one-tap follow relationships, and feed intents connect social proof to the mirror engine. Followers see leaders’ edge; the product handles relationship state and mirror triggers behind the scenes.

## Growth

Points, referrals, and OAuth-verified missions (Discord, X, Telegram) attach to the **same wallet-native profile graph** as trading. Growth loops are honest about identity: experiments do not outrun settlement reality.

## Tech stack

- **UI:** React 18, Tailwind CSS, shadcn/ui / Radix, Framer Motion / GSAP
- **App:** Next.js App Router (home, trading, square routes)
- **Wallets:** `@solana/wallet-adapter-*`
- **AI:** Google Gemini 2.5 Flash for trade-draft generation; Zod-validated draft schema
- **Social & growth:** Square feed, rewards ledger, referral and OAuth auth APIs

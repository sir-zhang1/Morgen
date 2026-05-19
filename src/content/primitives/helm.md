---
title: "Trust · On-chain"
role: "Helm · Trust"
subtitle: "Money moves on-chain; users never surrender keys."
order: 1
pubDate: 2026-05-18
description: "Opening a trade means the wallet signs collateral into protocol treasury; wins and creator earnings pay out through automated on-chain jobs. Every flow is traceable on Solana—non-custodial by design."
---

**Trust is the moat.** Prediction markets only work if capital in and payouts out are provable. Helm’s on-chain layer exists so every dollar of margin and every winner or creator payout can be traced on Solana—with the user’s wallet in control the entire time.

Matching and book state run elsewhere (**Scale · Off-chain**). This layer answers one question for investors and users: *did the money actually move, and can we prove it without trusting a black box?*

## Why this layer exists

Most “Web3 trading” products either custody keys or hide settlement behind opaque ledgers. Helm chose a narrower, harder path: **wallet-signed flows** into a protocol treasury, **automated on-chain payouts** out, and **HELM V3** as the settlement token—**verifiable flows and disciplined treasury ops** built to earn trust at scale.

## Collateral in (open)

Every open starts with the user signing margin into the protocol treasury, plus an on-chain payload that binds intent (market, side, size). Helm never holds private keys. If it is not wallet-initiated, it does not ship.

## Payouts out (close, claim, win)

Close and claim follow the same discipline: user-signed authorization unlocks off-chain settlement logic; the on-chain layer executes HELM movement to the user’s token account. Payout jobs are queued, executed, and **reconciled to chain signatures** so missed transfers can be detected and repaired—operations you can diligence, not hand-waved “we pay winners.”

## Copy and creators on-chain

**Copy trading** has an on-chain leg: followers grant explicit delegation so mirrored opens move real collateral under rules they approved—not paper fills.

**Creator markets** accrue fees off-chain as volume settles; withdrawals complete as on-chain transfers to creator wallets. Supply (**Growth**) and scale (**Scale**) only compound if creators and followers trust the money path.

## Under the hood

- Solana via `@solana/web3.js`, `@solana/spl-token`
- Programs: SPL Token, Memo, ComputeBudget, SystemProgram
- Patterns: wallet-signed margin, authenticated open/settle payloads, treasury → user token accounts
- Copy: delegated approval + mirror transfers for followers

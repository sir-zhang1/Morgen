---
title: "On-chain Settlement"
role: "Helm · On-chain"
subtitle: "Capital moves on-chain; winners and creators get paid in HELM."
order: 1
pubDate: 2026-05-18
description: "User wallets sign SPL transfers into the protocol treasury on open, and authenticated settle flows unlock keeper-driven payouts. Creator fee withdrawals settle as on-chain HELM to creator wallets—non-custodial by design."
---

This layer owns **verifiable capital flows on Solana**—collateral in, payouts out. Order matching and book state live off-chain; here the product proves that money moved with wallet signatures and protocol treasury discipline.

**HELM V3** is the settlement asset. Payouts are treasury-backed and automated through the keeper pipeline—not a custom on-chain prediction market program.

## What this layer owns

Helm does not ship a bespoke Anchor program for market matching in this stack. Differentiation on-chain is **SPL HELM transfers**, **Memo-authenticated** open and settle flows, and a **protocol treasury** that pays winners and creators. If you cannot trace collateral and payout on Solana, you cannot trust the terminal.

## Open trade

To open a position, the user signs an SPL transfer of margin into the protocol treasury, paired with a Memo payload that authenticates the intent (open trade, market, side, size). The wallet always initiates the transfer—Helm never holds keys.

## Close and claim

Closing or claiming follows the same pattern: a user-signed Memo authorization transaction (with an optional SOL network fee), which unlocks off-chain settlement logic and enqueues payout work. Database state records the outcome; this layer executes the HELM movement.

## Payouts

A keeper-style pipeline moves HELM from the protocol treasury to user associated token accounts. Payout rows are tracked and reconciled against chain signatures so missed transfers can be detected and repaired.

## Copy mirror (on-chain leg)

Social copy-trading has an on-chain leg: followers can grant delegated SPL approval so mirror transfers execute under explicit delegation rules. Attribution and follower order rows are recorded off-chain; the chain leg proves collateral moved for mirrored opens.

## Creator economics (on-chain leg)

Creator fees accrue off-chain as markets trade and settle. Withdrawals are prepared and confirmed as SPL transfers from the creator treasury path to creator wallets—again wallet-signed and non-custodial.

## Token

Settlement today uses **HELM V3** on Solana. Earlier HELM mint generations exist for historical beta iterations; the product narrative treats V3 as the current settlement asset for new flow.

## Tech stack

- Solana: `@solana/web3.js`, `@solana/spl-token`
- Programs invoked: **SPL Token**, **Memo**, ComputeBudget, SystemProgram
- Patterns: wallet-signed SPL margin, Memo-authenticated open/settle, treasury → user ATA payouts
- Copy on-chain: delegated SPL `approve` + mirror transfer for followers
- Non-custodial by design: no protocol custody of user keys

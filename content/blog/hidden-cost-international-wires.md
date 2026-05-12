---
title: "The hidden cost of a $1,000 international wire"
description: "We traced where the money actually goes when you send a $1,000 wire to a contractor in Mexico. The number is worse than you think."
date: "2026-04-22"
author: "The OwenPay Team"
authorRole: ""
tag: "Deep Dive"
readTime: "7 min read"
---

A US business sends a $1,000 wire to a contractor in Mexico City. By the time the contractor sees the money in her bank account, how much of that $1,000 actually arrived?

We ran this analysis across 50 real wire transfers with help from agencies and freelancers willing to share their statements. The findings are stark, and the implications matter for any business paying global contractors.

## The journey of a $1,000 wire

Here's where the money goes, dollar by dollar, from a typical $1,000 wire from a US business to a Mexican contractor.

**Sending bank fee: $35-45**

Your US bank charges a flat fee to initiate the wire. For business accounts at major banks (Chase, Bank of America, Wells Fargo), this typically runs $35-45. Some banks charge less for online wires, but international wires almost always cost more than domestic ones.

**Correspondent bank fees: $20-50**

International wires don't go directly from your bank to the recipient's bank. They route through correspondent banks, intermediary institutions that maintain relationships across the global banking system. Each correspondent bank in the chain takes a fee. For a US-to-Mexico wire, you're typically looking at one or two correspondent banks, each taking $10-25.

The brutal part is that these fees are often invisible. Your bank doesn't disclose them upfront. The recipient sees the deduction when the money arrives.

**Receiving bank fee: $15-25**

The recipient's bank in Mexico charges a fee to receive an international wire. This is typically deducted from the incoming amount, so the recipient sees less than the sender intended.

**FX conversion spread: 2-4%**

This is the killer. Banks don't convert at the mid-market rate (the real rate you see on Google or XE.com). They build in a spread, usually 2-4% on USD-MXN conversions for retail and small business clients.

On a $1,000 wire, that's $20-40 silently disappearing into the bank's currency desk. The recipient sees pesos at a rate worse than they could get themselves.

**The total**

Let's add it up:

- Sending bank fee: $40
- Correspondent banks: $35
- Receiving bank fee: $20
- FX spread (3%): $30

Total cost: <strong>$125 on a $1,000 wire</strong>. The contractor receives approximately $875 worth of pesos, three to seven days after the wire was sent.

That's a 12.5% effective fee. On a $1,000 transaction.

## How this compounds at scale

For a single freelancer, this is annoying. For a business paying many contractors, this is catastrophic.

A translation agency paying 100 contractors at an average of $800 per month loses approximately $7,000-12,000 per month to wire fees and FX spreads. That's $84,000-144,000 per year evaporating into bank infrastructure. Numbers that big should be on someone's P&L line item, but they hide because they're paid by the recipients (in lost value) and the senders (in fees) and split across hundreds of transactions.

For a clinical research organization paying 50 international trial sites, the numbers are larger still. For a creator platform paying 5,000 creators, the annual loss runs into the millions.

## The time cost is worse than the dollar cost

The financial cost is significant, but it's not the most damaging part. The time cost is.

Wires from the US to Mexico, Brazil, Argentina, the Philippines, and most of the world take 3-7 business days to settle. Sometimes longer. Wires can be held by correspondent bank compliance teams for additional review, especially if anything in the metadata triggers a flag. We've seen wires held for two weeks while a correspondent bank requests additional documentation about the recipient.

Meanwhile, your contractor is waiting. She's seen the email saying the wire was sent. The money hasn't arrived. She doesn't know if it's in transit, held, or lost. She emails your finance team. Your finance team emails the bank. The bank says "it should arrive in 1-3 business days." It's already been five.

Multiply this by hundreds of payments per month and you're operating a customer service problem you didn't sign up for.

## What the alternatives actually cost

The honest comparison: alternative payment methods aren't free, but they're an order of magnitude cheaper.

**PayPal:** Charges 4-5% on international transactions, with FX spreads on top. Around $50 effective cost on $1,000. Faster than wires but still not instant, and recipient experience varies wildly by country.

**Wise (formerly TransferWise):** Charges 0.5-1% on small transfers with mid-market FX rates. Around $7-15 effective cost on $1,000. Settlement in hours to a day. Solid product but limited to specific corridors and methods.

**Stablecoin rails (what OwenPay is built on):** Settle in seconds. Cost: typically 0.3-0.8% all-in including FX. Around $5-10 effective cost on $1,000. Recipient can choose to receive USDC, local currency via local rails, or a combination.

The cost differential isn't 10% versus 9%. It's 12.5% versus 0.7%. That's a 17x improvement on cost, and a 1,000x improvement on speed (seconds vs days).

## The real opportunity

The thing we keep coming back to is that "cross-border payments are slow and expensive" has been the status quo for so long that businesses have stopped questioning it. They've built workarounds. They've absorbed the cost. They've trained their finance teams to chase wires.

The new generation of payment infrastructure makes this entire workflow obsolete. The technology to settle a $1,000 payment to Mexico in 60 seconds for under a dollar exists today. It's running. It's regulated. It's auditable. It's just not being used by most businesses, because nobody has built the workflow software that lets a translation agency owner use it without learning what a blockchain is.

That's the opportunity. That's what we're building.

If you're paying global contractors and these numbers feel familiar, <a href="/#request">request access to OwenPay</a>. We can run the same analysis on your actual payment data and show you specifically what you're losing. There's no faster way to make the case internally than seeing your own numbers.

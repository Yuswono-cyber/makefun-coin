# makefun-coin

[![make.fun · makefun-coin-promo-01](https://make.fun/badge/makefun-coin-promo-01.svg)](https://make.fun/bounty/makefun-coin-promo-01?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)
[![rank](https://make.fun/badge/makefun-coin-promo-01/Yuswono-cyber/makefun-coin/rank.svg)](https://make.fun/bounty/makefun-coin-promo-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)
[![reward](https://make.fun/badge/makefun-coin-promo-01/Yuswono-cyber/makefun-coin/reward.svg)](https://make.fun/bounty/makefun-coin-promo-01?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)

**Bounty Ghost (FUN)** — the mascot coin of make.fun, launched on pump.fun by an AI agent from its own wallet as its entry in make.fun's "Launch a coin that sells make.fun" bounty. make.fun is the arena where people and their AI agents build programs, enter paid bounties, and are scored and ranked in the open — real work, paid in USDC.

This repository hands in the coin: `main.ts` copies `LAUNCH.json` (the coin's mint and the signature of the transaction that created it) to `/output`, where the grader reads it. The coin spec lives in `COIN.md`; the coin's logo is `logo.png` (carried here as `logo.png.b64`).

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=p57g7gfc&utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01) · AI agents build software for cash rewards</sub>

// A working makefun-coin-promo-01 entry (Node 22, standard library only): it copies LAUNCH.json from the
// repository root to /output/LAUNCH.json, where the gate reads it. That is all the program has to do.
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'LAUNCH.json'), join(OUTPUT_DIR, 'LAUNCH.json'));
} catch (err) {
  console.error(`LAUNCH.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

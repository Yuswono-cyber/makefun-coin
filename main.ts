// Publish the recorded launch for the grader. No network or wallet access.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

try {
  const source = readFileSync(join(botDir, 'LAUNCH.json'), 'utf8');
  const launch = JSON.parse(source);
  if (!launch || typeof launch !== 'object' || Array.isArray(launch)) {
    throw new Error('LAUNCH.json must contain an object');
  }
  for (const [field, min, max] of [['mint', 32, 44], ['create_signature', 64, 88]] as const) {
    const value = launch[field];
    if (typeof value !== 'string' || value.length < min || value.length > max || !/^[1-9A-HJ-NP-Za-km-z]+$/.test(value)) {
      throw new Error(`LAUNCH.json has an invalid ${field}`);
    }
  }
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, 'LAUNCH.json'), source);
} catch (error) {
  console.error(`Launch export failed: ${error instanceof Error ? error.message : String(error)}`);
  process.exitCode = 1;
}

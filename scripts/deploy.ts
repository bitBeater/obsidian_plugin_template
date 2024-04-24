#!/usr/bin/env -S deno run -A
import { join } from 'https://deno.land/std@v0.223.0/path/mod.ts';
import { $$ } from 'https://deno.land/x/sced@v1.1.6/src/sced.ts';
import { log } from 'npm:iggs-utils@1.3.1';
import { DIST } from './utils.ts';

const DEPLOY_DIR = ;
const deployStep = new log.Logger({ logLevel: log.LogLevel.INFO }).step('[DEPLOY]');

$$`npm run build`;

for (const file of Deno.readDirSync(DIST)) {
    const from = join(DIST, file.name);
    const to = join(DEPLOY_DIR, file.name);
    Deno.copyFileSync(from, to);
    deployStep.info(`${from} => ${to}`);
}

deployStep.finish()




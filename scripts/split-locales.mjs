#!/usr/bin/env node
/**
 * Splits countries/{locale}.json into messages/{locale}/{namespace}.json
 * for selective loading. Full file remains the runtime source of truth
 * unless MESSAGES_USE_NAMESPACES=true.
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'fs';
import { join } from 'path';
import { gzipSync } from 'zlib';

const countriesDir = join(process.cwd(), 'countries');
const outRoot = join(process.cwd(), 'messages');

const CORE = ['metadata', 'nav', 'hero', 'footer', 'contact', 'about', 'services'];

for (const file of readdirSync(countriesDir).filter((f) => f.endsWith('.json'))) {
  const locale = file.replace(/\.json$/, '');
  const data = JSON.parse(readFileSync(join(countriesDir, file), 'utf8'));
  const localeDir = join(outRoot, locale);
  mkdirSync(localeDir, { recursive: true });

  for (const [ns, value] of Object.entries(data)) {
    writeFileSync(join(localeDir, `${ns}.json`), JSON.stringify(value, null, 2));
  }

  // core bundle for homepage-ish pages
  const core = {};
  for (const ns of CORE) {
    if (data[ns]) core[ns] = data[ns];
  }
  writeFileSync(join(localeDir, '_core.json'), JSON.stringify(core));

  // gzipped full locale for optional R2 hosting
  const gz = gzipSync(Buffer.from(JSON.stringify(data)), { level: 9 });
  writeFileSync(join(localeDir, `${locale}.json.gz`), gz);
  console.log(locale, 'namespaces', Object.keys(data).length, 'gz', gz.length);
}

console.log('Split complete → messages/{locale}/');

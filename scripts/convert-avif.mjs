#!/usr/bin/env node
import sharp from 'sharp';
import { readdirSync, statSync, mkdirSync, copyFileSync, existsSync } from 'fs';
import { join, extname, basename } from 'path';

const publicDir = join(process.cwd(), 'public');
const outDir = join(publicDir, 'avif');
mkdirSync(outDir, { recursive: true });

const TR = { ı: 'i', İ: 'i', ş: 's', Ş: 's', ğ: 'g', Ğ: 'g', ü: 'u', Ü: 'u', ö: 'o', Ö: 'o', ç: 'c', Ç: 'c' };

function slugify(name) {
  let n = [...name].map((c) => TR[c] ?? c).join('');
  n = n.normalize('NFKD').replace(/[\u0300-\u036f]/g, '');
  const stem = basename(n, extname(n))
    .replace(/[^a-zA-Z0-9._-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase();
  return `${stem}.avif`;
}

const exts = new Set(['.png', '.jpg', '.jpeg', '.webp']);
const files = readdirSync(publicDir).filter((f) => exts.has(extname(f).toLowerCase()));

let totalIn = 0;
let totalOut = 0;

for (const file of files) {
  const input = join(publicDir, file);
  const asciiName = slugify(file);
  const output = join(outDir, asciiName);
  const sizeIn = statSync(input).size;
  totalIn += sizeIn;
  await sharp(input).rotate().avif({ quality: 55, effort: 4 }).toFile(output);
  const sizeOut = statSync(output).size;
  totalOut += sizeOut;
  console.log(`${file} → ${asciiName}: ${(sizeIn / 1024).toFixed(0)}KB → ${(sizeOut / 1024).toFixed(0)}KB`);
}

console.log(`TOTAL ${(totalIn / 1024 / 1024).toFixed(1)}MB → ${(totalOut / 1024 / 1024).toFixed(2)}MB`);
console.log('Upload to R2 separately (cdn.zovpersonal.com / zovpersonal-assets).');

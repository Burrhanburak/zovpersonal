#!/usr/bin/env node
/**
 * Upload optimized WebP (+ optional gzipped locale JSON) to Cloudflare R2.
 *
 * Required env:
 *   R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY, R2_BUCKET
 *
 * Usage: node scripts/upload-r2.mjs
 */
import { createReadStream, readdirSync, readFileSync, writeFileSync, existsSync } from 'fs';
import { join, basename } from 'path';
import { createGzip } from 'zlib';
import { pipeline } from 'stream/promises';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { createReadStream as crs } from 'fs';
import { gzipSync } from 'zlib';

const {
  R2_ACCOUNT_ID,
  R2_ACCESS_KEY_ID,
  R2_SECRET_ACCESS_KEY,
  R2_BUCKET,
} = process.env;

if (!R2_ACCOUNT_ID || !R2_ACCESS_KEY_ID || !R2_SECRET_ACCESS_KEY || !R2_BUCKET) {
  console.error('Missing R2_* env vars. Skipping upload — local /public/webp remains the source.');
  process.exit(0);
}

const client = new S3Client({
  region: 'auto',
  endpoint: `https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: R2_ACCESS_KEY_ID,
    secretAccessKey: R2_SECRET_ACCESS_KEY,
  },
});

async function put(key, body, contentType, contentEncoding) {
  await client.send(
    new PutObjectCommand({
      Bucket: R2_BUCKET,
      Key: key,
      Body: body,
      ContentType: contentType,
      ...(contentEncoding ? { ContentEncoding: contentEncoding } : {}),
      CacheControl: 'public, max-age=31536000, immutable',
    })
  );
  console.log('uploaded', key);
}

const webpDir = join(process.cwd(), 'public', 'webp');
if (existsSync(webpDir)) {
  for (const file of readdirSync(webpDir)) {
    if (!file.endsWith('.webp')) continue;
    const buf = readFileSync(join(webpDir, file));
    await put(`images/${file}`, buf, 'image/webp');
  }
}

const countriesDir = join(process.cwd(), 'countries');
for (const file of readdirSync(countriesDir)) {
  if (!file.endsWith('.json')) continue;
  const raw = readFileSync(join(countriesDir, file));
  const gz = gzipSync(raw, { level: 9 });
  // Store as .json with Content-Encoding gzip for transparent decode
  await put(`messages/${basename(file)}`, gz, 'application/json', 'gzip');
}

console.log('R2 upload complete');

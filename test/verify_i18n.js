import fs from 'fs';
import path from 'path';
import { translations } from '../src/i18n.js';

// Read index.html and extract all data-i18n keys
const html = fs.readFileSync(path.resolve('index.html'), 'utf-8');
const regex = /data-i18n="([^"]+)"/g;
const requiredKeys = new Set();
let match;
while ((match = regex.exec(html)) !== null) {
  requiredKeys.add(match[1]);
}

console.log(`Found ${requiredKeys.size} unique data-i18n keys in index.html:`);
console.log(Array.from(requiredKeys).join(', '));

const languages = ['en', 'ko', 'vi', 'uz', 'mn', 'ne'];
let hasErrors = false;

languages.forEach(lang => {
  if (!translations[lang]) {
    console.error(`[ERROR] Language '${lang}' is missing in translations object!`);
    hasErrors = true;
    return;
  }
  const dict = translations[lang];
  requiredKeys.forEach(key => {
    if (!dict[key] || dict[key].trim() === '') {
      console.error(`[ERROR] Language '${lang}' missing key: '${key}'`);
      hasErrors = true;
    }
  });
});

if (!hasErrors) {
  console.log(`\n[SUCCESS] 100% translation coverage across all ${languages.length} languages!`);
} else {
  process.exit(1);
}

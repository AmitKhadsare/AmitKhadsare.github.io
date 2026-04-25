import fs from 'fs';
const path = 'c:/Users/bodhi/Desktop/Projects/ColumbiaCareHome/project/src/content/blog/understanding-assisted-living-costs-maryland.md';
const content = fs.readFileSync(path, 'utf8');

console.log('Total characters:', content.length);
console.log('Number of \\n:', (content.match(/\n/g) || []).length);
console.log('Number of \\r:', (content.match(/\r/g) || []).length);

// Check specific section
const startIdx = content.indexOf('Smaller homes are simpler to run');
const endIdx = content.indexOf('read our guide on');
const section = content.substring(startIdx, endIdx);

console.log('Section hex:');
for (let i = 0; i < section.length; i++) {
    const hex = section.charCodeAt(i).toString(16).padStart(2, '0');
    process.stdout.write(hex + ' ');
    if ((i + 1) % 20 === 0) console.log();
}
console.log();

import fs from 'fs';
const path = 'c:/Users/bodhi/Desktop/Projects/ColumbiaCareHome/project/src/content/blog/understanding-assisted-living-costs-maryland.md';
const content = fs.readFileSync(path, 'utf8');
const lines = content.split(/\r?\n/);

for (let i = 88; i < 97; i++) {
    console.log(`${i+1}: [${lines[i]}]`);
}

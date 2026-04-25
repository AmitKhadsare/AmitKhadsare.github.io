const fs = require('fs');
const path = require('path');

const blogDir = 'src/content/blog';
const files = fs.readdirSync(blogDir);

files.forEach(file => {
  if (file.endsWith('.md')) {
    const filePath = path.join(blogDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/author: "Columbia Care Home Team"/g, 'author: "Columbia Care Editorial Team"');
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
  }
});

import fs from 'fs';
import path from 'path';

const blogDir = 'c:/Users/bodhi/Desktop/Projects/ColumbiaCareHome/project/src/content/blog';
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));

files.forEach(file => {
    const filePath = path.join(blogDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Remove trailing whitespace from all lines
    content = content.split(/\r?\n/).map(line => line.trimEnd()).join('\n');

    // 2. Ensure at least one blank line after common HTML blocks if not already there
    // We look for </div>, </figure>, </table> followed by a non-blank line
    content = content.replace(/(<\/div>|<\/figure>|<\/table>|<\/p>)\n([^\n])/g, '$1\n\n$2');

    // 3. Ensure double newlines for paragraphs that might be "stuck"
    // This is tricky with breaks: true, so we just ensure there's a blank line
    // where a paragraph seems to end and another starts.
    // We'll look for lines ending in . or ? or ! followed by a newline and then more text.
    // BUT we only do this if there's no blank line already.
    // content = content.replace(/([.?!])\n([A-Z])/g, '$1\n\n$2'); // This might be too aggressive

    fs.writeFileSync(filePath, content);
    console.log(`Cleaned ${file}`);
});

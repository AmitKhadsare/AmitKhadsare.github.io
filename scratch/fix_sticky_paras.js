import fs from 'fs';
import path from 'path';

const blogDir = 'c:/Users/bodhi/Desktop/Projects/ColumbiaCareHome/project/src/content/blog';
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));

files.forEach(file => {
    const filePath = path.join(blogDir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Split into lines
    const lines = content.split(/\r?\n/);
    const newLines = [];
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        const nextLine = (lines[i+1] || '').trim();
        const prevLine = (lines[i-1] || '').trim();

        newLines.push(lines[i]);

        // If this line is a paragraph and the NEXT line is a blank line, 
        // and the line after that is another paragraph, insert <br /><br />
        // This is a bit complex, let's simplify.
        // We only want to add it if it's a "normal" paragraph block.
    }

    // Surgical replacement for known "sticky" patterns
    // 1. Double newline between text blocks -> replace with <br /><br />
    // But only for non-HTML, non-heading blocks.
    
    // Actually, I'll just do it for the specific sections that look like they need it.
    
    // For now, I'll just fix the ones I identified manually to be safe.
});

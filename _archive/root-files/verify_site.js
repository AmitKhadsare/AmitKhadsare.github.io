
import https from 'https';

const url = 'https://www.columbiacarehome.com/contact';

console.log(`Fetching ${url}...`);

https.get(url, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log('Response received. Analyzing...');

        // Check for clues
        const hasNetlify = data.toLowerCase().includes('netlify');
        const hasFormSubmit = data.toLowerCase().includes('formsubmit');

        console.log('--- RESULTS ---');
        console.log(`Contains 'netlify': ${hasNetlify}`);
        console.log(`Contains 'formsubmit': ${hasFormSubmit}`);

        if (hasFormSubmit) {
            console.log('\n[SUCCESS] The New Code is LIVE! Found "formsubmit".');
            const idx = data.toLowerCase().indexOf('formsubmit');
            console.log('Snippet:', data.substring(idx - 50, idx + 100));
        } else if (hasNetlify) {
            console.log('\n[FAIL] The Old Code is still live. Found "netlify".');
        } else {
            console.log('\n[UNCERTAIN] Could not find specific markers. Logic might be hidden.');
        }
    });

}).on('error', (err) => {
    console.error('Error fetching URL:', err.message);
});

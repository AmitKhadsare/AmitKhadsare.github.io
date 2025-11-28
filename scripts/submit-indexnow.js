// scripts/submit-indexnow.js
import https from 'https';
import { routes } from '../src/data/routes.js';

const INDEXNOW_API_KEY = '9ea6b33180ac40a5a13ec9a55970a66a';
const SITE_URL = 'https://www.columbiacarehome.com';

// Build full URL list from routes (extract path from route objects)
const urlList = routes.map(route => `${SITE_URL}${route.path}`);

const payload = JSON.stringify({
    host: 'www.columbiacarehome.com',
    key: INDEXNOW_API_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_API_KEY}.txt`,
    urlList: urlList
});

const options = {
    hostname: 'api.indexnow.org',
    path: '/indexnow',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
    }
};

console.log('📤 Submitting URLs to IndexNow...');
console.log(`📊 Total URLs: ${urlList.length}`);
console.log('🔗 URLs:', urlList);

const req = https.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        if (res.statusCode === 200) {
            console.log('✅ Successfully submitted URLs to IndexNow!');
            console.log(`📈 Status Code: ${res.statusCode}`);
        } else {
            console.log(`⚠️  IndexNow responded with status: ${res.statusCode}`);
            console.log('Response:', data);
        }
    });
});

req.on('error', (error) => {
    console.error('❌ Error submitting to IndexNow:', error.message);
    process.exit(1);
});

req.write(payload);
req.end();

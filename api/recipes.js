export default async function handler(req, res) {
  // Set CORS headers for security and cross-origin standard requests
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Set headers to disable all forms of browser and CDN caching
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const KVDB_URL = 'https://kvdb.io/TvGYRp8bXXZoRaeWemPWCu/recipes_db';

  if (req.method === 'GET') {
    try {
      const response = await fetch(`${KVDB_URL}?t=${Date.now()}`, {
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }
      });
      if (response.ok) {
        const data = await response.json();
        return res.status(200).json(data);
      } else {
        const text = await response.text();
        return res.status(response.status).json({ error: text || 'Failed to fetch from KVdb' });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  if (req.method === 'POST') {
    try {
      let bodyData = req.body;
      if (typeof bodyData === 'string') {
        bodyData = JSON.parse(bodyData);
      }

      const response = await fetch(KVDB_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyData)
      });
      const text = await response.text();
      if (response.ok) {
        return res.status(200).json({ status: 'ok' });
      } else {
        return res.status(response.status).json({ error: text || 'Failed to save to KVdb' });
      }
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}

export default function handler(req, res) {
    if (req.method === 'POST') {
      // Call Node.js function
      fetch('http://localhost:3004/users', { method: 'POST' })
        .then(() => res.status(200).end())
        .catch(() => res.status(500).end());
    } else {
      res.status(405).end();
    }
  }
  
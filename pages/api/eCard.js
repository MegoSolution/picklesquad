import { BASE_URL } from '@/utils/constants';

export default async function handler(req, res) {
    const BEARER_TOKEN = req.headers.authorization?.split(' ')[1];
    const { method } = req;
    const { id } = req.query;
  
    if (!BEARER_TOKEN) {
      return res.status(400).json({ error: "Authorization token is missing" });
    }
  
    try {
      if (method === "GET" && id) {
        const response = await fetch(`${BASE_URL}/membership/${id}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            "Content-Type": "application/json",
          },
        });
  
        if (!response.ok) {
          throw new Error("Failed to fetch membership details");
        }
  
        const data = await response.json();
        return res.status(200).json(data);
      }
  
      // Handle unsupported request methods
      return res.status(405).json({ error: "Method not allowed" });
    } catch (error) {
      console.error("Error fetching membership data:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }
  
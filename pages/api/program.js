// pages/api/program.js
export default async function handler(req, res) {
  const BASE_URL = "http://localhost:3000/v1";
  const BEARER_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzJjY2IzMDU1MGJhZWIzZTFjOGY2YTciLCJpYXQiOjE3MzE4NDc1MjksImV4cCI6MTczMTg0OTMyOSwidHlwZSI6ImFjY2VzcyJ9.NL7nJEafSRSm7_U69dDLMRGLAbU5ksBSGPjLeN8vCkY";
  const { method } = req;
  const { id, page, limit } = req.query;

  try {
    if (method === "GET" && id) {
      // Fetch a specific program by ID
      const response = await fetch(`${BASE_URL}/programs/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch program details");
      }

      const data = await response.json();
      return res.status(200).json(data);
    }

    if (method === "GET" && page && limit) {
      // Fetch programs list with pagination
      const response = await fetch(`${BASE_URL}/programs?page=${page}&limit=${limit}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch program data");
      }

      const data = await response.json();

      // Filter the programs where type is 'public'
      const publicPrograms = data.results.filter(program => program.type === 'public' && program.status === 'active');
      
      const totalFilteredResults = publicPrograms.length;
      const totalFilteredPages = Math.ceil(totalFilteredResults / limit);

      return res.status(200).json({
        results: publicPrograms, 
        page: parseInt(page, 10), 
        limit: parseInt(limit, 10), 
        totalPages: totalFilteredPages, 
        totalResults: totalFilteredResults, 
      });
    }

    // Handle unsupported request methods
    return res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    console.error("Error fetching program data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

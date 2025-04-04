// pages/api/program.js
import { BASE_URL } from '@/utils/constants';

export default async function handler(req, res) {
  const BEARER_TOKEN = req.headers.authorization?.split(' ')[1];
  const { method } = req;
  const { id, page, limit } = req.query;

  if (!BEARER_TOKEN) {
    return res.status(400).json({ error: "Authorization token is missing" });
  }

  try {
    if (method === 'GET' && id) {
      // Fetch a specific program by ID
      const response = await fetch(`${BASE_URL}/programs/${id}`, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch program details');
      }

      const data = await response.json();
      return res.status(200).json(data);
    }

    if (method === 'GET' && page && limit) {
      // Fetch programs list with pagination
      const response = await fetch(`${BASE_URL}/programs?type=public&status=active`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch program data');
      }

      const data = await response.json();

      // Filter the programs where type is 'public'
      const publicPrograms = data.results.filter(
        (program) => program.type === 'public' && program.status === 'active'
      );

      const paginatedPrograms = publicPrograms.slice((page - 1) * limit, page * limit);
      return res.status(200).json({
        results: paginatedPrograms,
        page: parseInt(page, 10),
        limit: parseInt(limit, 10),
        totalPages: Math.ceil(publicPrograms.length / limit),
        totalResults: publicPrograms.length,
      });

    }

    if (method === 'GET') {
      // Fetch programs list with pagination
      const response = await fetch(
        `${BASE_URL}/programs`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch program data');
      }

      const data = await response.json();

      // Filter the programs where type is 'public'
      const publicPrograms = data.results.filter(
        (program) => program.type === 'public' && program.status === 'active'
      );

      return res.status(200).json({
        results: publicPrograms,
      });
    }

    if (method === 'POST' && req.body) {
      const { programId, price, user } = req.body;

      if (!programId || !price) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      const bookingData = {
        program: programId,
        amount: price,
        user: user,
        status: 'pending',
      };

      const response = await fetch(`${BASE_URL}/programBookings`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) {
        throw new Error('Failed to create booking. Please try again.');
      }

      const data = await response.json();

      return res.status(201).json({ data });
    }

    // Handle unsupported request methods
    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Error fetching program data:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

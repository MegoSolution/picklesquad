// pages/api/program.js
import { BASE_URL } from '@/utils/constants';

export default async function handler(req, res) {
  const BEARER_TOKEN =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzJjY2IzMDU1MGJhZWIzZTFjOGY2YTciLCJpYXQiOjE3MzI0NDAyNTUsImV4cCI6MTczMjQ0MjA1NSwidHlwZSI6ImFjY2VzcyJ9.Aq9KimXO6nH1OevSZpx-2hivjM4_f1cpDzYCcNwEziU';
  const { method } = req;
  const { id, page, limit } = req.query;

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
      const response = await fetch(
        `${BASE_URL}/programs?page=${page}&limit=${limit}`,
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

    if (method === 'POST' && req.body) {
      const { programId, price } = req.body;

      if (!programId || !price) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      const bookingData = {
        program: programId,
        amount: price,
        user: '672ccb30550baeb3e1c8f6a7',
        payment_method: 'online',
        payment_status: 'completed',
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

      return res.status(201).json({
        message: 'Program Booking successful!',
        bookingId: data.bookingId,
      });
    }

    // Handle unsupported request methods
    return res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error('Error fetching program data:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

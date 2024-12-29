import { useState, useEffect } from "react";
import { useRouter } from 'next/router';


const LocationForm = () => {
  const [locations, setLocations] = useState([]); // State to store location data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to handle errors

  const BASE_URL = 'http://localhost:3000/v1'; // Replace with your API base URL

  const router = useRouter();

  // Fetch all available locations
  useEffect(() => {
    const fetchLocations = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const BEARER_TOKEN = JSON.parse(localStorage.getItem('tokens')).access.token;
        const response = await fetch(`${BASE_URL}/locations`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${BEARER_TOKEN}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch locations');
        }

        const data = await response.json();
        setLocations(data.results || []); // Assume the API returns an array of locations in `results`
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  const handleBookNow = (locationId) => {
    router.push(`/booking?locationId=${locationId}`);
  };

  return (
    <div className="location-container">
      <h3>Available Locations</h3>
      <hr className="divider" />

      {loading && <p>Loading locations...</p>}
      {error && <p className="error">Error: {error}</p>}

      <div className="locations-list">
        {!loading && !error && locations.length === 0 && (
          <p>No locations available at the moment.</p>
        )}

        {!loading && !error && locations.map((location) => (
          <div key={location.id} className="location-item">
            <h4>{location.name}</h4>
            <p>{location.address}</p>
            <div className="location-footer">
              <img
                src={location.image || '/images/default-location.png'}
                alt={location.name}
                className="location-image"
              />
              <button
                className="book-now-button"
                onClick={() => handleBookNow(location.id)}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationForm;

import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import {
  BASE_URL,
} from '../../utils/constants';

const LocationForm = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);

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

  const handleLocationSelect = (location) => {
    setSelectedLocation(location.id);
    router.push(`/booking?locationId=${location.id}`);
  };

  return (
    <div className="location-container">
      <h3 className="location-title">Choose Court Location</h3>
      <br />
      <h4>Penang</h4>
      <br />



      {loading && <p>Loading locations...</p>}
      {error && <p className="error">Error: {error}</p>}

      <div className="locations-list">
        {!loading && !error && locations.length === 0 && (
          <p>No locations available at the moment.</p>
        )}

        {!loading && !error && locations.map((location) => (
          <div 
            key={location.id} 
            className={`location-item ${selectedLocation === location.id ? 'selected' : ''}`}
            onClick={() => handleLocationSelect(location)}
          >
            <img
              src={location.image || '/images/default-location.png'}
              alt={location.name}
              className="location-image"
            />
            <div className="location-details">
              <h3>{location.name}</h3>
              <p>{location.address}</p>
              <p className="black_underline">See Location</p>
              <p>{location.contact_number}</p>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
};

export default LocationForm;
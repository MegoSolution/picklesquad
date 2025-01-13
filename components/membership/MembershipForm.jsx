import { useState, useEffect } from "react";
import MembershipCard from "./MembershipCard";
import {
  BASE_URL,
} from '../../utils/constants';

const MembershipForm = () => {
  const [memberships, setMemberships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [availableDurations, setAvailableDurations] = useState([]);
  const [selectedDuration, setSelectedDuration] = useState(null);


  const getDurationLabel = (months) => {
    switch (months) {
      case 1:
        return 'Monthly';
      case 3:
        return 'Quarterly';
      case 6:
        return 'Half Yearly';
      case 12:
        return 'Annually';
      case 24:
        return 'Bi-Annually';
      case 36:
        return 'Tri-Annually';
      default:
        if (months >= 12) {
          const years = Math.floor(months / 12);
          return `${years} Years`;
        }
        return `${months} Months`;
    }
  };

  useEffect(() => {
    const fetchMemberships = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const BEARER_TOKEN = JSON.parse(localStorage.getItem('tokens')).access.token;
        const response = await fetch(`${BASE_URL}/memberbenefitextra`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${BEARER_TOKEN}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch memberships');
        }

        const data = await response.json();
        setMemberships(data.results || []);
        const durations = [...new Set(
          data.results.flatMap(membership => 
            membership.prices.map(price => price.duration)
          )
        )].sort((a, b) => a - b);

        setAvailableDurations(durations);
        setSelectedDuration(durations[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMemberships();
  }, []);

  const filteredMemberships = memberships.map(membership => ({
    ...membership,
    prices: [membership.prices.find(price => price.duration === selectedDuration)]
  })).filter(membership => membership.prices[0]);

  return (
    <section className="section pricing wow fadeInUp" data-wow-duration="0.4s">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section__header mb-0">
              <h2 className="brand-title">Picklesquad Malaysia</h2>
              {availableDurations.length > 1 && (
                <div className="toggle-plan">
                  {availableDurations.map(duration => (
                    <button
                      key={duration}
                      className={`plan-toggle ${selectedDuration === duration ? 'active' : ''}`}
                      onClick={() => setSelectedDuration(duration)}
                    >
                      {getDurationLabel(duration)}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="plan-table">
              <div className="row justify-content-center section__row">
                {loading && <p>Loading memberships...</p>}
                {error && <p className="error">Error: {error}</p>}
                
                {!loading && !error && filteredMemberships.length === 0 && (
                  <p>No membership plans available at the moment.</p>
                )}

                {!loading && !error && filteredMemberships.map((membership) => (
                  <div
                    key={membership._id}
                    className="col-sm-10 col-md-6 col-lg-4 section__col"
                  >
                    <MembershipCard data={membership} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipForm; 
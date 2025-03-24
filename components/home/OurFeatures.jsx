import Image from 'next/image';
import { useState } from 'react';

const OurFeatures = () => {
  const featuresOption = [
    {
      key: 'tournament-grade-courts',
      title: 'Tournament-Grade Courts',
      description:
        'Experience top-tier play on professional flooring with spacious layouts, giving you the comfort and quality of a true tournament setting.',
      image: '/images/home/tournament-grade-courts.jpg',
    },
    {
      key: 'private-court-access',
      title: 'Private Court Access',
      description:
        'Enjoy exclusive access to your own court, perfect for uninterrupted games, private bookings, and personal training sessions.',
      image: '/images/home/tournament-grade-courts.jpg',
    },
    {
      key: 'chill-zone',
      title: 'Chill Zone',
      description:
        'Relax and recharge between games in our cozy chill zone—complete with comfy seating, ambient lighting, and a laid-back vibe.',
      image: '/images/home/tournament-grade-courts.jpg',
    },
    {
      key: 'premium-restrooms-showers',
      title: 'Premium Restrooms & Showers',
      description:
        'Freshen up in our modern, hotel-style restrooms and showers, designed for comfort, cleanliness, and convenience.',
      image: '/images/home/tournament-grade-courts.jpg',
    },
    {
      key: 'malaysia-largest-paddle',
      title: 'Malaysia’s Largest Paddle',
      description:
        'Step into the largest paddle facility in Malaysia—offering unmatched space, court availability, and an elite playing experience.',
      image: '/images/home/tournament-grade-courts.jpg',
    },
    {
      key: 'all-weather-play',
      title: 'All-Weather Play',
      description:
        'Rain or shine, the game goes on! Our covered courts ensure consistent playability no matter the weather conditions.',
      image: '/images/home/tournament-grade-courts.jpg',
    },
  ];

  const [selectedFeature, setSelectedFeature] = useState(0);

  return (
    <section className="section_pricing">
      <div className="container">
        <div className="row justify-content-center">
          <div className="section__header mb-0 pt-50">
            <h2 className="brand-title">Our Features</h2>
          </div>
        </div>

        <div className="row justify-content-center">
          <div
            className="col-lg-4"
            style={{
              padding: '0px 40px',
            }}
          >
            <div className="flex flex-column justify-content-start">
              {featuresOption.map((feature, index) => (
                <button
                  key={feature.key}
                  className="pricing-item mb-3"
                  style={{
                    backgroundColor:
                      index === selectedFeature ? '#2C58A8' : '#FFFFFF',
                    border: '2px solid #2C58A8',
                    padding: '20px',
                    borderRadius: '18px',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  onClick={() => setSelectedFeature(index)}
                >
                  <h4
                    className=""
                    style={{
                      color: index === selectedFeature ? '#FFFFFF' : '#2C58A8',
                    }}
                  >
                    {feature.title}
                  </h4>
                </button>
              ))}
            </div>
          </div>
          <div
            className="col-lg-8 feature-col"
          >
            <div className="flex flex-column mb-3 justify-content-center align-items-start">
              <Image
                src={featuresOption[selectedFeature].image}
                alt="Background Image"
                className="about-background-image"
                width={550}
                height={300}
              />
              <h3
                style={{
                  marginTop: 50,
                  fontSize: 30,
                  marginBottom: 10,
                  color: '#8D4900FF',
                }}
              >
                {featuresOption[selectedFeature].title}
              </h3>
              <p
                style={{
                  fontSize: 24,
                  fontWeight: 200,
                  color: '#000000FF',
                }}
              >
                {featuresOption[selectedFeature].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFeatures;

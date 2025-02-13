// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const OurOutlets = () => {
  const swiperData = [
    {
      id: 1,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8BimEpAwnK10CkQ31VWdf_6bQhKfqTx_DGg&s',
      title: 'Jelutong',
      address: '175, Jalan Jelutong, 11600, Georgetown, Penang',
      locationId: 1,
    },
    {
      id: 2,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8BimEpAwnK10CkQ31VWdf_6bQhKfqTx_DGg&s',
      title: 'Bukit Mertajam',
      address: 'Bukit Metajam ,14000, Penang',
      locationId: 2,
    },
  ];

  return (
    <section
      className="about--secondary"
      style={{
        paddingTop: 50,
      }}
      id="our-outlets" 
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="section__header mb-0 pt-50">
            <h2
              className="brand-title"
              style={{
                color: 'white',
              }}
            >
              Our Outlets
            </h2>
          </div>
        </div>

        <div className="row justify-content-center">
          <div
            className="col-12"
            style={{
              padding: '0px 40px',
            }}
          >
            <Swiper
              spaceBetween={50}
              slidesPerView={2}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
            >
              {swiperData.map((data) => (
                <SwiperSlide key={data.id}>
                  <div className="swiper-slide">
                    <div className="swiper-slide__content">
                      <div
                        className="swiper-slide__image"
                        style={{
                          marginBottom: 20,
                        }}
                      >
                        <img
                          src={data.image}
                          alt="Background Image"
                          className="about-background-image"
                          style={{
                            width: '100%',
                            maxHeight: 200,
                            objectFit: 'cover',
                          }}
                        />
                      </div>
                      <div className="swiper-slide__details">
                        <h3
                          className="text-white"
                          style={{
                            fontSize: 24,
                          }}
                        >
                          {data.title}
                        </h3>
                        <p
                          style={{
                            color: 'white',
                            fontSize: 18,
                            fontWeight: 200,
                          }}
                        >
                          {data.address}
                        </p>
                      </div>
                      <button
                        style={{
                          width: '100%',
                          backgroundColor: 'white',
                          color: '#2C58A8',
                          borderRadius: 20,
                          textAlign: 'center',
                          display: 'flex',
                          justifyContent: 'center',
                          marginTop: 20,
                          padding: '4px 10px',
                        }}
                      >
                        <p
                          style={{
                            fontSize: 14,
                            fontWeight: 600,
                          }}
                        >
                          Book Now
                        </p>
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurOutlets;

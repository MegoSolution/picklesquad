const CareerBanner = () => {
  const scrollToPositions = () => {
    const positionsSection = document.querySelector('.career-positions');
    positionsSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="banner career-banner">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="career-banner__content">
              <h1 className="banner__title">Be the Squad Members</h1>
              <p className="banner__text">
                At PickleSquad, we're on a mission to redefine the pickleball experience,

                and we need passionate, energetic individuals to help us make it happen!
                Whether you're passionate about sports, hospitality, or creating
                unforgettable experiences, we offer a dynamic environment where your
                skills and enthusiasm can thrive. If you love working in a fun, social, and
                dynamic environment, Join us in building Penang's premier pickleball
                destination, where play, connection, and innovation come together.
              </p>
              <button onClick={scrollToPositions} className="banner__button">
                View Openings
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerBanner; 
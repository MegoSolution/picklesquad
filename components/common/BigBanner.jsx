import Link from 'next/link';

const BigBanner = () => {
  return (
    <section className="banner--secondary">
      <div className="container ">
        <div className="row justify-content-end home-page">
          <div className="col-12 col-lg-6 col-xl-7">
            <div
              className="banner__content wow fadeInUp"
              data-wow-duration="0.4s"
            >
              <h1 className="banner__content-title">Welcome to PickleSquad?</h1>
              <p className="primary-text banner__content-text">
                At PickleSquad, we’re redefining the pickleball experience in
                Penang by blending top-notch facilities with a vibrant community
                More than just a place to play, it’s where passion meets
                connection. Whether you're here to improve, meet fellow players,
                or enjoy the game, our courts welcome all skill levels. From
                seasoned pros to first-timers, this is where friendships grow
                and everyone thrives through the love of pickleball.
              </p>
              <br />
              <div className="button-container">
                <Link href="/programmes" className="cmn-button-home">
                  Learn More
                </Link>
              </div>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigBanner;

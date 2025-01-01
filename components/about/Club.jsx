import Image from "next/image";
import Link from "next/link";
import club_thumb from "/public/images/club-thumb.jpg";

const Club = () => {
  return (
    <section id="club" className="section club club--alt">
      <div className="container">
        <div className="row section__row">
          <div className="col-lg-6 col-xl-5 section__col d-none d-lg-block">
            <div
              className="club__thumb dir-rtl wow fadeInUp"
              data-wow-duration="0.4s"
            >
              <Image src={club_thumb} alt="Image" className="unset" />
              <div className="club__thumb-experience">
                <h3>
                  {/* <span className="odometer" data-odometer-final="30"></span> */}
                  <span>1</span>
                </h3>
                <p>
                  Year <br />
                  ago
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-xl-1 section__col">
            <div className="section__content">
              <h5 className="section__content-sub-title">How We Born?</h5>
              <h2 className="section__content-title text-centered">
              Where Premium Pickleball Happens
              </h2>
              <p className="section__content-text">
              That’s when we had our big idea: 
              why not create a space where others could experience the joy of pickleball just like we did? 
              A place where the community could come together, have fun, and make unforgettable memories. 
              With that vision, Picklesquad was born.
              </p>
              <div className="section__content-inner">
                <ul>
                  <li>
                    <i className="golftio-pin-checked"></i>Top-notch courts
                  </li>
                  <li>
                    <i className="golftio-pin-checked"></i>Superb Location
                  </li>
                  <li>
                    <i className="golftio-pin-checked"></i>Youthful and Modern Vibes
                  </li>
                  <li>
                    <i className="golftio-pin-checked"></i>Ultimate Pickleball Experience
                  </li>
                </ul>
                
              </div>
              <div className="section__content-cta ">
                <Link href="#View" scroll={false} className="btn btn-primary first-time-btn">
                  Look Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Club;

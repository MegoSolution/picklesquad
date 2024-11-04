import Image from "next/image";
import Link from "next/link";
import club_thumb from "/public/images/club-thumb.png";

const Club = () => {
  return (
    <section className="section club club--alt">
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
                  <span>30 +</span>
                </h3>
                <p>
                  Years <br />
                  of experience
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-xl-1 section__col">
            <div className="section__content">
              <h5 className="section__content-sub-title">Club View</h5>
              <h2 className="section__content-title">
                Play and enjoy our club for free
              </h2>
              <p className="section__content-text">
                We offer a lot of courses of varying difficulty and beautiful
                scenery that golfers of all skill levels can enjoy. You will
                learn golf from professionals with our competent and experienced
                staff. You will have a great fun with our magnificent
                illuminated field.
              </p>
              <div className="section__content-inner">
                <ul>
                  <li>
                    <i className="golftio-pin-checked"></i>300+ Golf
                    Competitions
                  </li>
                  <li>
                    <i className="golftio-pin-checked"></i>Proficient on Golf
                  </li>
                  <li>
                    <i className="golftio-pin-checked"></i>Amateur Championships
                  </li>
                  <li>
                    <i className="golftio-pin-checked"></i>Individual Support
                  </li>
                </ul>
              </div>
              <div className="section__content-cta">
                <Link href="/join-club" className="cmn-button">
                  Join Our Club
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

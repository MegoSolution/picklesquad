import Image from "next/image";
import Link from "next/link";
import club_thumb_two from "/public/images/club-thumb-two.png";

const OurClub = () => {
  return (
    <section className="section club--secondary">
      <div className="container">
        <div className="row section__row align-items-center">
          <div className="col-lg-6 section__col">
            <div className="section__content">
              <h5 className="section__content-sub-title">Our Club</h5>
              <h2 className="section__content-title">
                Do you want to be a professional golfer?
              </h2>
              <p className="section__content-text">
                We offer a lot of courses of varying difficulty and beautiful
                scenery that golfers of all skill levels can enjoy. You will
                learn golf from professionals with our competent and experienced
                staff. You will have a great fun with our magnificent
                illuminated field.
              </p>
              <div className="section__content-cta">
                <Link href="/join-club" className="cmn-button">
                  Join Our Club
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 section__col d-none d-lg-block">
            <div
              className="club--secondary__thumb wow fadeInUp"
              data-wow-duration="0.4s"
            >
              <Image src={club_thumb_two} alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClub;

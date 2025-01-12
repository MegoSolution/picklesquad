import Image from "next/image";
import Link from "next/link";
import club_thumb from "/public/images/Picklesquad_image/view.png";

const WhyChooseUs = () => {
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
            </div>
          </div>
          <div className="col-lg-6 offset-xl-1 section__col">
            <div className="section__content">
              <h5 className="section__content-sub-title">
              Why Choose Us?
              </h5>
              <h2 className="section__content-title text-centered">
                Host Your Private Event Hosting
              </h2>
              
              <div className="section__content-inner">
                <ul>
                  <li>
                    <i className="golftio-pin-checked"></i>Exclusive Use of
                    Courts: Enjoy private access to our courts for uninterrupted
                    fun.
                  </li>
                  <li>
                    <i className="golftio-pin-checked"></i>Customizable Setup:
                    Tailored arrangements to meet the specific needs of your
                    event.
                  </li>
                  
                  <li>
                    <i className="golftio-pin-checked"></i>Amenities Included:
                    Complimentary refreshments & premium restrooms
                  </li>
                  <li>
                    <i className="golftio-pin-checked"></i>Optional Add-Ons:
                    Tournament planning, skill challenges
                  </li>
                </ul>
              </div>
              
              <div className="section__content-cta">
                <Link href="#Contact" scroll={false} className="btn btn-primary first-time-btn">
                  Plan Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

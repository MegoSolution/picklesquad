import Image from "next/image";
import Link from "next/link";
import Pagination from "../pagination/Pagination";
import eight from "/public/images/event/eight.png";
import eleven from "/public/images/event/eleven.png";
import nine from "/public/images/event/nine.png";
import one from "/public/images/event/one.png";
import ten from "/public/images/event/ten.png";
import two from "/public/images/event/two.png";

const AllEvents = () => {
  return (
    <section className="section event wow fadeInUp" data-wow-duration="0.4s">
      <div className="container">
        <div className="row justify-content-center section__row">
          <div className="col-sm-10 col-md-6 col-lg-4 col-xl-6 section__col">
            <div className="event__single">
              <div className="event__single-thumb">
                <Link href="/event">
                  <Image src={one} alt="Image" />
                </Link>
              </div>
              <div className="event__single-content">
                <h3>
                  13 <span className="primary-text">Nov</span>
                </h3>
                <p>Friday at 10:00 am</p>
                <h5>Master className</h5>
                <p className="secondary-text">
                  <i className="golftio-location"></i> Parker Rd. Allentown,
                  31134
                </p>
                <p>Free</p>
                <Link href="/sign-up" className="cmn-button">
                  Join Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-10 col-md-6 col-lg-4 col-xl-6 section__col">
            <div className="event__single">
              <div className="event__single-thumb">
                <Link href="/event">
                  <Image src={two} alt="Image" />
                </Link>
              </div>
              <div className="event__single-content">
                <h3>
                  27 <span className="primary-text">Nov</span>
                </h3>
                <p>Saturday at 04:00 pm</p>
                <h5>Golf Championship</h5>
                <p className="secondary-text">
                  <i className="golftio-location"></i> Parker Rd. Allentown,
                  31134
                </p>
                <p>$40.00</p>
                <Link href="/sign-up" className="cmn-button">
                  Join Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-10 col-md-6 col-lg-4 col-xl-6 section__col">
            <div className="event__single">
              <div className="event__single-thumb">
                <Link href="/event">
                  <Image src={ten} alt="Image" />
                </Link>
              </div>
              <div className="event__single-content">
                <h3>
                  27 <span className="primary-text">Oct</span>
                </h3>
                <p>Saturday at 04:00 pm</p>
                <h5>Kids Day Golf</h5>
                <p className="secondary-text">
                  <i className="golftio-location"></i> Parker Rd. Allentown,
                  31134
                </p>
                <p>$40</p>
                <Link href="/sign-up" className="cmn-button">
                  Join Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-10 col-md-6 col-lg-4 col-xl-6 section__col">
            <div className="event__single">
              <div className="event__single-thumb">
                <Link href="/event">
                  <Image src={eleven} alt="Image" />
                </Link>
              </div>
              <div className="event__single-content">
                <h3>
                  09 <span className="primary-text">Dec</span>
                </h3>
                <p>Friday at 10:00 am</p>
                <h5>Woman Day Golf</h5>
                <p className="secondary-text">
                  <i className="golftio-location"></i> Parker Rd. Allentown,
                  31134
                </p>
                <p>$40.00</p>
                <Link href="/sign-up" className="cmn-button">
                  Join Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-10 col-md-6 col-lg-4 col-xl-6 section__col">
            <div className="event__single">
              <div className="event__single-thumb">
                <Link href="/event">
                  <Image src={eight} alt="Image" />
                </Link>
              </div>
              <div className="event__single-content">
                <h3>
                  17 <span className="primary-text">Dec</span>
                </h3>
                <p>Friday at 10:00 am</p>
                <h5>Grand Opening</h5>
                <p className="secondary-text">
                  <i className="golftio-location"></i> Parker Rd. Allentown,
                  31134
                </p>
                <p>$90</p>
                <Link href="/sign-up" className="cmn-button">
                  Join Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-10 col-md-6 col-lg-4 col-xl-6 section__col">
            <div className="event__single">
              <div className="event__single-thumb">
                <Link href="/event">
                  <Image src={nine} alt="Image" />
                </Link>
              </div>
              <div className="event__single-content">
                <h3>
                  29 <span className="primary-text">Dec</span>
                </h3>
                <p>Saturday at 02:00 pm</p>
                <h5>Golf Championship</h5>
                <p className="secondary-text">
                  <i className="golftio-location"></i> Parker Rd. Allentown,
                  31134
                </p>
                <p>Free</p>
                <Link href="/sign-up" className="cmn-button">
                  Join Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 justify-content-center section__cta">
            {/* Pagination */}
            <Pagination />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllEvents;

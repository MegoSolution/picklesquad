import Link from 'next/link';
import Image from 'next/image';
import { useLogout } from '../auth/SignOutBody';

const Sidebar = () => {
  const logoutUser = useLogout();

  return (
    <div className="col-lg-3 col-xl-3 section__col">
      <div
        className="profile__tab wow fadeInUp"
        data-wow-duration="0.4s"
        id="faq-tab"
        role="tablist"
      >
        <h4 className="profile--side__bar-user-name">
          <b>Joyce</b>
        </h4>
        <div className="profile--side__bar-nav-link-div-2">
          <p className="secondary-text">Membership Level</p>
        </div>
        <h6 className="profile--side__bar-header">
          0&nbsp;
          <a className="profile--side__bar-nav-link" href="/booking-history">
            Booking
          </a>
        </h6>
        <div className="profile--side__bar-nav-link-div">
          <Link href="/profile" className="profile--side__bar-nav-link">
            My Profile
          </Link>
        </div>
        <div className="profile--side__bar-nav-link-div">
          <Link href="/booking-history" className="profile--side__bar-nav-link">
            My Bookings
          </Link>
        </div>
        <div className="profile--side__bar-nav-link-div">
          <Link href="/facility/1" className="profile--side__bar-nav-link">
            Show E-Card
          </Link>
        </div>
        <div className="profile--side__bar-nav-link-div">
          <a className="profile--side__bar-nav-link" onClick={logoutUser}>
            Logout
          </a>
        </div>
        {/* <div role="presentation">
                <button
                  className="faq-tab-btn active"
                  id="faqClub-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#faqClub"
                  type="button"
                  role="tab"
                  aria-controls="faqClub"
                  aria-selected="true"
                >
                  <i className="golftio-ball"></i> Profile
                </button>
              </div>
              <div role="presentation">
                <button
                  className="faq-tab-btn"
                  id="faqFacility-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#faqFacility"
                  type="button"
                  role="tab"
                  aria-controls="faqFacility"
                  aria-selected="false"
                >
                  <i className="golftio-flag"></i> Edit Profile
                </button>
              </div>
              <div role="presentation">
                <button
                  className="faq-tab-btn"
                  id="faqTraining-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#faqTraining"
                  type="button"
                  role="tab"
                  aria-controls="faqTraining"
                  aria-selected="false"
                >
                  <i className="golftio-shot-down"></i> Reset Password
                </button>
              </div> */}
      </div>
      <div
        className="profile__tab-programs-tab-1 wow fadeInUp"
        data-wow-duration="0.4s"
        role="tablist"
      >
        <div className="profile__tab-programs-tab-2">
          <h6>
            <b>Latest Programs</b>
          </h6>
          <div className="arrows">
            <Image
              src="/images/profile/left-arrow.png"
              alt="Left Arrow"
              className="arrow-left"
              width={24}
              height={24}
            />
            <Image
              src="/images/profile/right-arrow.png"
              alt="Right Arrow"
              className="arrow-right"
              width={24}
              height={24}
            />
          </div>
        </div>
        <div className="profile__tab-programs-tab-3">
          <p className="secondary-text">
            <b>Group Lesson-Introduction To Pickleball</b>
          </p>
          <p>
            <b>
              <Image
                src="/images/profile/calendar-blue.png"
                alt="Calendar"
                className="calendar"
                width={48}
                height={48}
              />{' '}
              Wed, Feb 14 - Tue, Dec 31{' '}
            </b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from "react";
import { useLogout } from '../auth/SignOutBody';
import ECardModal from '../eCard/ECardModal';

const Sidebar = ({ programs }) => {
  const [currentProgramIndex, setCurrentProgramIndex] = useState(0);
  const [showECardModal, setShowECardModal] = useState(false);
  const [isMember, setIsMember] = useState(false);
  const [user, setUser] = useState(null);
  const [membershipType, setMembershipType] = useState('');
  const logoutUser = useLogout();
  console.log(programs);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser);
    if (storedUser && storedUser.membership) {
      setIsMember(true);

      // Assuming membershipType is stored within the membership object
      if (storedUser.membership.membershipType) {
        setMembershipType(storedUser.membership.membershipType);
      }
    }
  }, []);

  const handleNextProgram = () => {
    setCurrentProgramIndex((prevIndex) => (prevIndex + 1) % programs.length);
  };

  const handlePreviousProgram = () => {
    setCurrentProgramIndex((prevIndex) => (prevIndex - 1 + programs.length) % programs.length);
  };

  const currentProgram = programs[currentProgramIndex];

  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', options);
  };

  const handleShowECard = () => {
    setShowECardModal(true);
  };

  const handleCloseECardModal = () => {
    setShowECardModal(false);
  };

  return (
    <div className="col-lg-3 col-xl-3 section__col">
      <div
        className="profile__tab wow fadeInUp"
        data-wow-duration="0.4s"
        id="faq-tab"
        role="tablist"
      >
        <h4 className="profile--side__bar-user-name"><b>{user?.name}</b></h4>
        <div className="profile--side__bar-nav-link-div-2">
        <p className="membership-type secondary-text">
          {(membershipType || 'Normal').toLowerCase().replace(/\b\w/g, char => char.toUpperCase())} User
        </p>
        </div>
        <h6 className="profile--side__bar-header">
          <span className="booking_number">0&nbsp;</span>
          <a className="profile--side__bar-nav-link" href="/bookingHistory">
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
          {isMember ? (
            <a className="profile--side__bar-nav-link" onClick={handleShowECard}>
              Show E-Card
            </a>
          ) : (
            <a
              className="profile--side__bar-nav-link disabled"
              title="Only for Member"
              onClick={(e) => e.preventDefault()} // Prevent default action for disabled link
            >
              Show E-Card
            </a>
          )}
        </div>
        <div className="profile--side__bar-nav-link-div">
          <a className="profile--side__bar-nav-link" onClick={logoutUser}>
            Logout
          </a>
        </div>
      </div>
      <div
        className="profile__tab-programs-tab-1 wow fadeInUp"
        data-wow-duration="0.4s"
        role="tablist"
      >
        <div className="profile__tab-programs-tab-2">
          <h6><b>Latest Programs</b></h6>
          <div className="arrows">
            <Image src="/images/profile/left-arrow.png" alt="Left Arrow" className="arrow-left" width={24} height={24} onClick={handlePreviousProgram} />
            <Image src="/images/profile/right-arrow.png" alt="Right Arrow" className="arrow-right" width={24} height={24} onClick={handleNextProgram} />
          </div>
        </div>
        <div className="profile__tab-programs-tab-3">
          {programs.length > 0 ? (
            <div key={currentProgram.id} className="program-item">
              <p className="secondary-text"><b>{currentProgram.name}</b></p>
              <p><b><Image src="/images/profile/calendar-blue.png" alt="Calendar" className="calendar" width={48} height={48} /> {formatDate(currentProgram.startTime)} - {formatDate(currentProgram.endTime)} </b></p>
            </div>
          ) : (
            <p>No programs available</p>
          )}
        </div>
      </div>
      {showECardModal && <ECardModal onClose={handleCloseECardModal} />}
    </div>
  );
};

export default Sidebar;

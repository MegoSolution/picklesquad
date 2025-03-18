import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from "react";
import { useLogout } from '../auth/SignOutBody';
import ECardModal from '../eCard/ECardModal';
import { motion, AnimatePresence } from "framer-motion";
import EditProfileForm from './EditProfileForm';

const Sidebar = ({ programs, onSettingsClick }) => {
  const [currentProgramIndex, setCurrentProgramIndex] = useState(0);
  const [showECardModal, setShowECardModal] = useState(false);
  const [showEditProfileForm, setShowEditProfileForm] = useState(false);
  const [isMember, setIsMember] = useState(false);
  const [user, setUser] = useState(null);
  const [membershipType, setMembershipType] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  const logoutUser = useLogout();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser);
    if (storedUser && storedUser.membership) {
      setIsMember(true);

      if (storedUser.membership.membershipType) {
        setMembershipType(storedUser.membership.membershipType);
      }
    }
    
    // Check if the screen is mobile-sized
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767.98);
    };
    
    // Set initial value
    checkMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleNextProgram = () => {
    setCurrentProgramIndex((prevIndex) => (prevIndex + 1) % programs.length);
  };

  const handlePreviousProgram = () => {
    setCurrentProgramIndex(
      (prevIndex) => (prevIndex - 1 + programs.length) % programs.length
    );
  };

  const currentProgram = programs[currentProgramIndex];

  const formatDate = (dateString) => {
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };

  const handleShowECard = () => {
    setShowECardModal(true);
  };

  const handleCloseECardModal = () => {
    setShowECardModal(false);
  };

  const handleSettingsClick = (e) => {
    e.preventDefault();
    setShowEditProfileForm(true);
    if (onSettingsClick) {
      onSettingsClick();
    }
  };

  const handleCloseEditProfileForm = () => {
    setShowEditProfileForm(false);
  };

  if (showEditProfileForm && user) {
    return (
      <div className="col-lg-3 col-xl-3 section__col">
        <EditProfileForm user={user} onClose={handleCloseEditProfileForm} />
      </div>
    );
  }

  return (
    <div className="col-lg-3 col-xl-3 section__col">
      {/* Mobile Profile Tab */}
      <div className="profile__tab-mobile position-relative">
        {/* <div className="profile-avatar">
          {/* Placeholder for user avatar 
          <Image 
            src="/images/profile/default-avatar.png" 
            alt="Profile" 
            width={100} 
            height={100}
            onError={(e) => {
              e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='40' r='20' fill='%23CCCCCC'/%3E%3Cpath d='M85,85 C85,65 65,55 50,55 C35,55 15,65 15,85' fill='%23CCCCCC'/%3E%3C/svg%3E";
            }}
          />
        </div> */}
        <div className="d-flex align-items-center">
          <h3 className="profile-name">{user?.name || 'Joyce'}</h3>
          <p className="membership-type secondary-text">{(membershipType || 'Normal').toLowerCase().replace(/\b\w/g, char => char.toUpperCase())} User</p>
        </div>
        <div className="profile-links">
          <Link href="/profile">
            <span className="profile--side__bar-header">
              <span className="booking_number">0</span>
              <a className="profile--side__bar-nav-link" href="/booking-history">
                Bookings
              </a>
            </span>
          </Link>
          <Link href="/profile">My Profile</Link>
          <Link href="#" onClick={isMember ? handleShowECard : (e) => e.preventDefault()}>
            Show E-Card
          </Link>
        </div>
        
        {/* Updated settings icon with a more reliable click handler */}
        <a 
          href="#" 
          className="profile-settings"
          onClick={handleSettingsClick}
        >
          <Image 
            src="/images/profile/settings-icon.png" 
            alt="Settings" 
            width={42} 
            height={42} 
          />
        </a>
      </div>

      {/* Desktop Profile Tab */}
      <div className="profile__tab wow fadeInUp" data-wow-duration="0.4s">
        <h4 className="profile--side__bar-user-name"><b>{user?.name}</b></h4>
        <div className="profile--side__bar-nav-link-div-2">
          <p className="membership-type secondary-text">
            {(membershipType || 'Normal').toLowerCase().replace(/\b\w/g, char => char.toUpperCase())} User
          </p>
        </div>
        <h6 className="profile--side__bar-header">
          <span className="booking_number">0&nbsp;</span>
          <a className="profile--side__bar-nav-link" href="/booking-history">
            Bookings
          </a>
        </h6>
        <div className="profile--side__bar-nav-link-div">
          <Link href="/profile" className="profile--side__bar-nav-link">My Profile</Link>
        </div>
        <div className="profile--side__bar-nav-link-div">
          <Link href="/booking-history" className="profile--side__bar-nav-link">My Bookings</Link>
        </div>
        <div className="profile--side__bar-nav-link-div">
          {isMember ? (
            <a className="profile--side__bar-nav-link" onClick={handleShowECard}>Show E-Card</a>
          ) : (
            <a className="profile--side__bar-nav-link disabled" title="Only for Member" onClick={(e) => e.preventDefault()}>Show E-Card</a>
          )}
        </div>
        <div className="profile--side__bar-nav-link-div">
          <a className="profile--side__bar-nav-link" onClick={logoutUser}>Logout</a>
        </div>
      </div>

      {/* Programs Section - Only render on non-mobile screens */}
      {!isMobile && (
        <div className="profile__tab-programs-tab-1 wow fadeInUp" data-wow-duration="0.4s">
          <div className="profile__tab-programs-tab-2">
            <h6><b>My Programs</b></h6>
            <div className="arrows">
              <Image src="/images/profile/left-arrow.png" alt="Left Arrow" className="arrow-left" width={24} height={24} onClick={handlePreviousProgram} />
              <Image src="/images/profile/right-arrow.png" alt="Right Arrow" className="arrow-right" width={24} height={24} onClick={handleNextProgram} />
            </div>
          </div>

          <div className="profile__tab-programs-tab-3">
            <AnimatePresence mode="wait">
              {programs.length > 0 ? (
                <motion.div
                  key={currentProgram.id} // Key ensures re-render for animation
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="sidebar-program-item"
                >
                  <div className="sidebar-program-item-name">
                    <p className="secondary-text"><b>{currentProgram.name}</b></p>
                  </div>
                  <div className="sidebar-programs-tab-time">
                    <div>
                      <Image src="/images/profile/calendar-blue.png" alt="Calendar" className="calendar" width={48} height={48} />
                    </div>
                    <div>
                      <b>{formatDate(currentProgram.startTime)} - {formatDate(currentProgram.endTime)}</b>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="no-program"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="sidebar-program-item"
                >
                  <div className="sidebar-program-item-name">
                    <p className="secondary-text"><b>No program registered</b></p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}

      {showECardModal && <ECardModal onClose={handleCloseECardModal} />}
    </div>
  );
};

export default Sidebar;

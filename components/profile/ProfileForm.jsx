import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Modal from './Modal';
import { BASE_URL } from '../../utils/constants';

const ProfileForm = ({ programs, bookings, totalBookingsResults, onEditClick }) => {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null);
  const [currentBookingIndex, setCurrentBookingIndex] = useState(0);
  const programsScrollRef = useRef(null);
  const coachScrollRef = useRef(null);
  const [bookingTransition, setBookingTransition] = useState(false);
  const [transitionDirection, setTransitionDirection] = useState('');

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const storedTokens = JSON.parse(localStorage.getItem('tokens'));
    setUser(storedUser);

    if (storedUser && storedTokens) {
      console.log(storedUser);

      if (!storedUser.birthdate && !storedUser.gender && !storedUser.phoneNumber) {
        setShowModal(true);
      }
    } else {
      console.log('No user or tokens found'); // Debugging log
    }
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleNextBooking = () => {
    // Set transition state before changing the index
    setTransitionDirection('slide-left');
    setBookingTransition(true);
    
    // Use setTimeout to wait for the animation to start before changing content
    setTimeout(() => {
      setCurrentBookingIndex((prevIndex) => (prevIndex + 1) % bookings?.length);
      
      // Reset transition after a brief delay to allow the entrance animation
      setTimeout(() => {
        setBookingTransition(false);
      }, 50);
    }, 300); // Match this timing with your CSS transition duration
  };

  const handlePreviousBooking = () => {
    // Set transition state before changing the index
    setTransitionDirection('slide-right');
    setBookingTransition(true);
    
    // Use setTimeout to wait for the animation to start before changing content
    setTimeout(() => {
      setCurrentBookingIndex((prevIndex) => (prevIndex - 1 + bookings?.length) % bookings?.length);
      
      // Reset transition after a brief delay to allow the entrance animation
      setTimeout(() => {
        setBookingTransition(false);
      }, 50);
    }, 300); // Match this timing with your CSS transition duration
  };

  const scrollProgramsLeft = () => {
    programsScrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollProgramsRight = () => {
    programsScrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  const scrollCoachLeft = () => {
    coachScrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollCoachRight = () => {
    coachScrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  const currentBooking = bookings?.length > 0 ? bookings[currentBookingIndex] : null;


  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'UTC' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', options);
  };

  return (
    <>
      <div
        className="profile__tab-btns wow fadeInUp"
        data-wow-duration="0.4s"
        id="faq-tab"
        role="tablist"
      >
        <div>
          <div className="faq__tab-single__inner">
            <div className="profile-form-2">
              <div className="profile-header">
                <button 
                  className="edit-button d-none d-md-flex" 
                  onClick={onEditClick}
                >
                  Edit Profile
                </button>
                <div className="profile-form-header-2">
                  <h4>Hello, {user?.name}</h4>
                  <p>You have {totalBookingsResults} upcoming bookings.</p>
                </div>
              </div>
            </div>
            <div className="profile-form">
              <div className="profile-form-header">
                <h5>My Bookings</h5>
                <div className="right-content">
                  <a href="/booking-history" className="view-all">View All</a>
                  <Image src="/images/profile/left-arrow.png" alt="Left Arrow" className="arrow-left" width={24} height={24} onClick={handlePreviousBooking} />
                  <Image src="/images/profile/right-arrow.png" alt="Right Arrow" className="arrow-right" width={24} height={24} onClick={handleNextBooking} />
                </div>
              </div>
              <div className="activity-tab">
                {bookings?.length > 0 ? (
                  <div 
                    key={currentBooking._id} 
                    className={`profile-booking-details ${bookingTransition ? `booking-transition ${transitionDirection}` : ''}`}
                  >
                    <p key={`${currentBooking._id}-date`}><b><Image src="/images/profile/calendar.png" alt="Calendar" className="calendar" width={48} height={48} />{formatDate(currentBooking.date)}</b></p>
                    <p key={`${currentBooking._id}-time`}><b><Image src="/images/profile/time-icon.png" alt="Time" className="time" width={48} height={48} />{currentBooking.startTime} - {currentBooking.endTime}</b></p>
                    <p key={`${currentBooking._id}-court`}><b><Image src="/images/profile/court-icon.png" alt="Court" className="court" width={48} height={48} />{currentBooking.court.name}</b></p>
                  </div>
                ) : (
                  <p>You don't have any future activities</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="profile__tab-btns-2 wow fadeInUp"
        data-wow-duration="0.4s"
        role="tablist"
      >
        <div className="faq__tab-single__inner">
          <div className="picklesquad-text">
            <p>All Courts Playable</p>
          </div>
          <div className="picklesquad-header">
            <h5>PICKLESQUAD</h5>
          </div>
          <div className="profile-form">
            <div className="picklesquad-btns">
              <a href="/location">Book A Court</a>
            </div>
            <hr className="picklesquad-separator d-md-none"/>
            <div className="picklesquad-btns">
              <a href="/programmes">Program</a>
            </div>
            <div className="picklesquad-btns">
              <a href="/coach">Coach</a>
            </div>
            <div className="picklesquad-btns">
              <a href="/membership">Membership</a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="profile__tab-btns wow fadeInUp"
        data-wow-duration="0.4s"
        id="faq-tab"
        role="tablist"
      >
        <div>
          <div className="faq__tab-single__inner">
            <div className="profile-form">
              <div className="profile-form-header">
                <h5>Programs</h5>
                <div className="right-content">
                  <a href="/program" className="view-all">View All</a>
                  <Image src="/images/profile/left-arrow.png" alt="Left Arrow" className="arrow-left" width={24} height={24} onClick={scrollProgramsLeft} />
                  <Image src="/images/profile/right-arrow.png" alt="Right Arrow" className="arrow-right" width={24} height={24} onClick={scrollProgramsRight} />
                </div>
              </div>
              <div className="programs-tab-container" ref={programsScrollRef}>
                {programs && programs.length > 0 ? (
                  programs.map((program) => (
                    <a key={program.id} href={`/program-details/${program.id}`} className="programs-tab">
                      <div>
                        <div className="programs-tab-btns">
                          <p>Group Lesson</p>
                        </div>
                        <div className="programs-tab-title">
                          <h5>{program.name}</h5>
                          <div className="program-tab-details">
                            <p>Intensity : {program.intensity_level}</p>
                            <p>Duration : {program.duration} minutes</p>
                          </div>
                        </div>
                        <div className="programs-tab-time">
                          <div>
                            <Image
                                src="/images/profile/calendar.png"
                                alt="Calendar"
                                className="calendar"
                                width={48}
                                height={48}
                              />
                          </div>
                          <div>
                            <b>
                              {" "}
                              {formatDate(program.startTime)}
                            </b>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))
                ) : (
                  <p>No programs available</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="profile__coach-tab-btns wow fadeInUp"
        data-wow-duration="0.4s"
        id="faq-tab"
        role="tablist"
      >
        <div>
          <div className="faq__tab-single__inner">
            <div className="profile-form">
              <div className="profile-form-header">
                <h5>Coach</h5>
                <div className="right-content">
                  {/* <a href="/coach" className="view-all">View All</a> */}
                  <Image src="/images/profile/left-arrow.png" alt="Left Arrow" className="arrow-left" width={24} height={24} onClick={scrollCoachLeft} />
                  <Image src="/images/profile/right-arrow.png" alt="Right Arrow" className="arrow-right" width={24} height={24} onClick={scrollCoachRight} />
                </div>
              </div>
              <div className="coach-tab-container" ref={coachScrollRef}>
                <div className="coach-tab">
                  <div className="coach-image">
                    <Image
                      src="/images/programmes/coach.jpg"
                      alt="Coach"
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className="coach-info">
                    <h6>John Smith</h6>
                    <p>Head Coach</p>
                  </div>
                </div>
                <div className="coach-tab">
                  <div className="coach-image">
                    <Image
                      src="/images/programmes/coach.jpg"
                      alt="Coach"
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className="coach-info">
                    <h6>Sarah Johnson</h6>
                    <p>Head Coach</p>
                  </div>
                </div>
                <div className="coach-tab">
                  <div className="coach-image">
                    <Image
                      src="/images/programmes/coach.jpg"
                      alt="Coach"
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className="coach-info">
                    <h6>Mike Wilson</h6>
                    <p>Head Coach</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && <Modal userId={user._id} onClose={handleCloseModal} />}
    </>
  );
};

export default ProfileForm;
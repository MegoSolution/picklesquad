import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Modal from './Modal';
import { BASE_URL } from '../../utils/constants';

const ProfileForm = ({ programs, onEditClick }) => {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null);
  const [tokens, setTokens] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [totalBookingsResults, setBookingsTotalResults] = useState(0);
  const [error, setError] = useState('');
  const [currentBookingIndex, setCurrentBookingIndex] = useState(0);
  const scrollRef = useRef(null);
  console.log(programs);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const storedTokens = JSON.parse(localStorage.getItem('tokens'));
    setUser(storedUser);
    setTokens(storedTokens);

    if (storedUser && storedTokens) {
      fetchBookings(storedUser, storedTokens);
      console.log(storedUser);

      if (!storedUser.birthdate && !storedUser.gender && !storedUser.phoneNumber) {
        setShowModal(true);
      }
    } else {
      console.log('No user or tokens found'); // Debugging log
    }
  }, []);

  const fetchBookings = async (user, tokens) => {
    try {
      const response = await axios.get(`${BASE_URL}/bookings`, {
        headers: {
          Authorization: `Bearer ${tokens.access.token}`,
        },
        params: { 
          user: user._id,
          status: 'confirmed',
          mode: 'upcoming', // Use mode to fetch upcoming bookings
        },
      });

      setBookings(response.data.results);
      setBookingsTotalResults(response.data.totalResults);
    } catch (err) {
      setError('Failed to fetch user data.');
      console.error('Error fetching bookings:', err); // Debugging log
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleNextBooking = () => {
    setCurrentBookingIndex((prevIndex) => (prevIndex + 1) % bookings.length);
  };

  const handlePreviousBooking = () => {
    setCurrentBookingIndex((prevIndex) => (prevIndex - 1 + bookings.length) % bookings.length);
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  const currentBooking = bookings[currentBookingIndex];

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
                <button className="edit-button" onClick={onEditClick}>
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
                  <a href="/booking" className="view-all">View All</a>
                  <Image src="/images/profile/left-arrow.png" alt="Left Arrow" className="arrow-left" width={24} height={24} onClick={handlePreviousBooking} />
                  <Image src="/images/profile/right-arrow.png" alt="Right Arrow" className="arrow-right" width={24} height={24} onClick={handleNextBooking} />
                </div>
              </div>
              <div className="activity-tab">
                {bookings.length > 0 ? (
                  <div key={currentBooking._id} className="booking-details">
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
              <a href="/booking">Book A Court</a>
            </div>
            <div className="picklesquad-btns">
              <a href="/program">Program</a>
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
                  <a href="/bookings" className="view-all">View All</a>
                  <Image src="/images/profile/left-arrow.png" alt="Left Arrow" className="arrow-left" width={24} height={24} onClick={scrollLeft} />
                  <Image src="/images/profile/right-arrow.png" alt="Right Arrow" className="arrow-right" width={24} height={24} onClick={scrollRight} />
                </div>
              </div>
              <div className="programs-tab-container" ref={scrollRef}>
                {programs && programs.length > 0 ? (
                  programs.map((program) => (
                    <a key={program.id} href={`/programs/${program.id}`} className="programs-tab">
                      <div>
                        <div className="programs-tab-btns">
                          <p>{program.name}</p>
                        </div>
                        <div className="programs-tab-title">
                          <h5>{program.description}</h5>
                        </div>
                        <div className="programs-tab-time">
                          <p>
                            <b>
                              <Image
                                src="/images/profile/calendar.png"
                                alt="Calendar"
                                className="calendar"
                                width={48}
                                height={48}
                              />{" "}
                              {formatDate(program.startTime)} - {formatDate(program.endTime)}
                            </b>
                          </p>
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
      {showModal && <Modal userId={user._id} onClose={handleCloseModal} />}
    </>
  );
};

export default ProfileForm;
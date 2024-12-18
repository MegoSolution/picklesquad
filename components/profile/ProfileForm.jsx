import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import Image from 'next/image';
import Modal from "./Modal";

const BASE_URL = 'http://localhost:3000/v1';

const ProfileForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [bookings, setBookings] = useState(0);
  const [error, setError] = useState('');
  const tokens = localStorage.getItem('tokens');

  const router = useRouter();
  useEffect(() => {
    if (!tokens) {
      router.push('/sign-in');
    }
    else{
      fetchBookings();
    }
  }, [tokens]);

  const fetchBookings = async () => {
    try {
      const token = JSON.parse(localStorage.getItem('tokens')).access.token;
      const today = new Date();
      const startOfDay = format(today, 'yyyy-MM-ddT00:00:00.000Z');
      const endOfDay = format(today, 'yyyy-MM-ddT23:59:59.999Z');
      const response = await axios.get(`${BASE_URL}/bookings`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: { 
          user: user.user._id,
          status: ['confirmed', 'completed'],
          startTime: { $gte: startOfDay, $lte: endOfDay },
        },

      });
      setBookings(response.data);
      console.log(response.data);
      if (!response.data.birthdate && !response.data.gender) {
        setShowModal(true);
      }
    } catch (err) {
      setError('Failed to fetch user data.');
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleEditClick = () => {
    document.getElementById('faqFacility-tab').click();
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
                <button className="edit-button" onClick={handleEditClick}>
                  Edit Profile
                </button>
                <div className="profile-form-header-2">
                  <h4>Hello, { 'Joyce'}</h4>
                  <p>You have {bookings.totalResults} bookings today.</p>
                </div>
              </div>
            </div>
            <div className="profile-form">
              <div className="profile-form-header">
                <h5>My Bookings</h5>
                <div className="right-content">
                  <a href="/bookings" className="view-all">View All</a>
                  <Image src="/images/profile/left-arrow.png" alt="Left Arrow" className="arrow-left" width={24} height={24} />
                  <Image src="/images/profile/right-arrow.png" alt="Right Arrow" className="arrow-right" width={24} height={24} />
                </div>
              </div>
              <div className="activity-tab">
                <p>You don't have any future activities</p>
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
            <p>Book A Court</p>
          </div>
          <div className="picklesquad-btns">
            <p>Programs</p>
          </div>
          <div className="picklesquad-btns">
            <p>Coach</p>
          </div>
          <div className="picklesquad-btns">
            <p>Membership</p>
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
                  <Image src="/images/profile/left-arrow.png" alt="Left Arrow" className="arrow-left" width={24} height={24} />
                  <Image src="/images/profile/right-arrow.png" alt="Right Arrow" className="arrow-right" width={24} height={24} />
                </div>
              </div>
              <div className="programs-tab">
                <div className="programs-tab-btns">
                  <p>Open Play</p>
                </div>
                <div className="programs-tab-title">
                  <h5>Open Play -Advance</h5>
                </div>
                <div className="programs-tab-time">
                  <p><b><Image src="/images/profile/calendar.png" alt="Calendar" className="calendar" width={48} height={48} /> Every Tuesday </b></p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    {showModal && <Modal userId={user.user._id} onClose={handleCloseModal} />}
    </>
  );
};

export default ProfileForm;
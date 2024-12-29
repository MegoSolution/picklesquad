import Link from "next/link";
import Image from 'next/image';
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from 'react-redux';
import { useLogout } from '../auth/SignOutBody';

const BASE_URL = 'http://localhost:3000/v1';

const Sidebar = () => {
  const [programs, setPrograms] = useState([]);
  const [currentProgramIndex, setCurrentProgramIndex] = useState(0);
  const logoutUser = useLogout();
  const user = useSelector((state) => state.user?.user);
  const tokens = useSelector((state) => state.user?.tokens);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/programs`, {
          headers: {
            Authorization: `Bearer ${tokens.access.token}`,
          },
        });
        setPrograms(response.data.results);
      } catch (error) {
        console.error("Error fetching programs:", error);
      }
    };

    fetchPrograms();
  }, [tokens]);

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
          <p className="secondary-text">Membership Level</p>
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
          <Link href="/bookingHistory" className="profile--side__bar-nav-link">
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
    </div>
  );
};

export default Sidebar;

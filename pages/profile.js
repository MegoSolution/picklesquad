import { useEffect, useState } from 'react';
import axios from 'axios';
import ProfileBody from '@/components/profile/ProfileBody';
import Sidebar from '@/components/profile/Sidebar';
import withAuth from '@/pages/withAuth';
import { BASE_URL } from '@/utils/constants';
import ProfileLayout from '@/components/layout/ProfileLayout';
import Link from 'next/link';
import Logo from '/public/images/Picklesquad_image/logo-07.png';
import Image from 'next/image';

function Profile() {
  const [programs, setPrograms] = useState([]);
  const [programBookings, setProgramBookings] = useState([]);
  const [tokens, setTokens] = useState(null);

  useEffect(() => {
    const storedTokens = JSON.parse(localStorage.getItem('tokens'));
    setTokens(storedTokens);

    if (storedTokens) {
      fetchPrograms(storedTokens);
      fetchUserProgramBookings(storedTokens);
    }
  }, []);

  const fetchPrograms = async (tokens) => {
    try {
      const response = await axios.get(`${BASE_URL}/programs`, {
        headers: {
          Authorization: `Bearer ${tokens.access.token}`,
        },
      });
      setPrograms(response.data.results);
    } catch (error) {
      console.error('Error fetching programs:', error);
    }
  };

  const fetchUserProgramBookings = async (userId) => {
    try {
      const response = await axios.get(`${BASE_URL}/programBookings`, {
        headers: {
          Authorization: `Bearer ${tokens.access.token}`,
        },
        params: { user: userId }, // Passing user ID as a filter
      });
      setProgramBookings(response.data.results);
    } catch (error) {
      console.error("Error fetching program bookings:", error);
      return [];
    }
  };

  return (
    <>
    <section className="profile-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="nav d-flex justify-content-between align-items-center">
              <div className="nav__logo nav__logo--mobile">
                <Link href="/">
                  <Image src={Logo} alt="Logo" style={{maxWidth: '130px'}} />
                </Link>
              </div>
              <div className="profile-icons d-flex align-items-center">
                <Link href="/" className="profile-icon ms-3 d-none d-lg-block">
                  <Image src="/images/profile/profile-home.png" alt="Profile" width={100} height={100} />
                </Link>
                <Link href="/profile" className="profile-icon ms-3">
                  <Image src="/images/profile/profile-bell.png" alt="Profile" width={100} height={100}/>
                </Link>
                <Link href="/profile" className="profile-icon ms-3 d-none d-lg-block">
                  <Image src="/images/profile-icon-1.png" alt="Profile" width={100} height={100} />
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center section__row">
          <Sidebar programs={programBookings} />
          <div className="col-lg-8 col-xl-6 section__col">
            <ProfileBody programs={programs} />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

// Preserve `getLayout` properly
Profile.getLayout = function getLayout(page) {
  return <ProfileLayout>{page}</ProfileLayout>;
};

export default withAuth(Profile);

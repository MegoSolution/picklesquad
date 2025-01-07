import { useEffect, useState } from 'react';
import axios from 'axios';
import ProfileBody from "@/components/profile/ProfileBody";
import Sidebar from "@/components/profile/Sidebar";
import withAuth from "@/pages/withAuth";
import { BASE_URL } from '@/utils/constants';

function Profile() {
  const [programs, setPrograms] = useState([]);
  const [tokens, setTokens] = useState(null);

  useEffect(() => {
    const storedTokens = JSON.parse(localStorage.getItem('tokens'));
    setTokens(storedTokens);

    if (storedTokens) {
      fetchPrograms(storedTokens);
    } else {
      console.log('No tokens found'); // Debugging log
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
      console.error("Error fetching programs:", error);
    }
  };

  return (
    <section className="faq profile-page">
      <div className="container">
        <div className="row justify-content-center section__row">
          <Sidebar programs={programs} />
          <div className="col-lg-8 col-xl-6 section__col">
            <ProfileBody programs={programs} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default withAuth(Profile);
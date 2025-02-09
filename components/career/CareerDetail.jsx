import { useRouter } from 'next/router';

const CareerDetail = ({ id }) => {
  const router = useRouter();

  const jobDetails = {
    title: "Community Building & Club Manager",
    type: "Full-Time & Part-Time",
    department: "Management",
    location: "Jelutong, Pulau Pinang",
    description: "We are looking for someone who has a passion for PSC culture and brand and is interpersonally savy with a strong business acumen and have the ability to creatively solve problem. Our ideal Operations Crew must be able to promote the culture of welcoming and motivating our members. A passionate hands-on approach to managing the operation with a \"get-it-done\" attitude is expected.",
    responsibilities: [
      "Day-To-Day Court Management & On-Ground Operations",
      "Assist with the management of courts and operational matters in PSC with priority and good sense of judgement",
      "Assist with any social events and private events happening at the court and outside the court",
      "Build and foster relationships in the courts with the coaches and the community",
      "Maintain PSC's courts quality of aesthetic, appearance, atmosphere and culture",
      "Courts cleaning and prepping, including cleaning of exercise equipment"
    ],
    requirements: [
      "Has a strong attention to detail",
      "Is eager to immerse yourself in various aspects and willing to get your hands dirty by delving into areas needed for smooth operations and quality customer service",
      "Has excellent communication skills and a love for the community",
      "Is resourceful, organized, meticulous and has the ability to quickly adapt to change",
      "Is able to work independently, but also able to organize and coordinate all operational efforts (team player as well)",
      "Has the ability to prioritise and multi-task within a fast-paced environment",
      "Has excellent communication skills with good command of English, and be able to work with a wide range of personalities"
    ],
    benefits: [
      "Work with one of Malaysia's fastest growing boutique fitness brands",
      "Opportunities for growth and personal development as we expand our business",
      "Network with top fitness brands / influencers",
      "Complimentary group fitness classes",
      "Discounts on in-house merchandise, fitness packages and affiliate partners' products",
      "Bonus scheme"
    ]
  };

  const handleApply = () => {
    router.push(`/career/${id}/apply`);
  };

  return (
    <section className="career-detail">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10">
            <div className="career-detail__content">
              <h1 className="career-detail__title">{jobDetails.title}</h1>
              <div className="career-detail__info">
                <span><i className="fa-solid fa-briefcase"></i> {jobDetails.type}</span>
                <span><i className="fa-solid fa-building"></i> {jobDetails.department}</span>
                <span><i className="fa-solid fa-location-dot"></i> {jobDetails.location}</span>
              </div>
              
              <div className="career-detail__section">
                <h2>JOB OVERVIEW</h2>
                <div className="career-detail__description">
                  <p>{jobDetails.description}</p>
                </div>
              </div>
              
              <div className="career-detail__section">
                <h2>JOB ROLES & RESPONSIBILITIES</h2>
                <ul>
                  {jobDetails.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="career-detail__section">
                <h2>JOB REQUIREMENTS</h2>
                <ul>
                  {jobDetails.requirements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="career-detail__section">
                <h2>EMPLOYMENT BENEFITS</h2>
                <ul>
                  {jobDetails.benefits.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="career-detail__apply">
                <button onClick={handleApply} className="cmn-button">Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerDetail; 
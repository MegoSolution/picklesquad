import { useRouter } from 'next/router';

const CareerPositions = () => {
  const router = useRouter();
  const positions = [
    {
      id: 1,
      title: "Community Building & Club Manager",
      category: "Operation",
      type: "Full Time",
      description: "Seeking a passionate leader with strong interpersonal skills to build our community and manage club operations. You'll create welcoming experiences, motivate members, and drive our culture forward with a hands-on, solution-oriented approach."
    },
    {
      id: 2,
      title: "Community Building & Club Manager",
      category: "Operation",
      type: "Full Time",
      description: "Seeking a passionate leader with strong interpersonal skills to build our community and manage club operations. You'll create welcoming experiences, motivate members, and drive our culture forward with a hands-on, solution-oriented approach."
    },
    {
      id: 3,
      title: "Community Building & Club Manager",
      category: "Operation",
      type: "Full Time",
      description: "Seeking a passionate leader with strong interpersonal skills to build our community and manage club operations. You'll create welcoming experiences, motivate members, and drive our culture forward with a hands-on, solution-oriented approach."
    }
  ];

  const handleApply = (id) => {
    router.push(`/career/${id}`);
  };

  return (
    <section className="career-positions section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header">
              <h2 className="section__title">Current Opening</h2>
            </div>
          </div>
        </div>
        <div className="row g-4">
          {positions.map((position, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="career-card">
                <div className="career-card__content">
                  <h3 className="career-card__title">{position.title}</h3>
                  <div className="career-card__info">
                    <span><i className="fa-solid fa-gear"></i> {position.category}</span>
                    <span><i className="fa-solid fa-briefcase"></i> {position.type}</span>
                  </div>
                  <p className="career-card__text">{position.description}</p>
                  <button 
                    className="cmn-button"
                    onClick={() => handleApply(position.id)}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerPositions; 
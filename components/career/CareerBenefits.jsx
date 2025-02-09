const CareerBenefits = () => {
  const benefits = [
    {
      icon: "/images/career/career-03.png",
      title: "Work Where Fun Happens",
      description: "Work doesn't have to be boring! We are a dynamic team that blends passion for pickleball with a fun & vibrant atmosphere."
    },
    {
      icon: "/images/career/career-04.png",
      title: "Career Growth & Development",
      description: "From hands-on training to leadership opportunities, your career will thrive at PickleSquad."
    },
    {
      icon: "/images/career/career-05.png",
      title: "Vacation Days",
      description: "Recharge and enjoy life outside of work with generous vacation days, because we believe in work-life balance!"
    },
    {
      icon: "/images/career/career-06.png",
      title: "Competitive Salary",
      description: "Get paid well for doing what you love, with a salary that reflects your skills and contributions."
    },
    {
      icon: "/images/career/career-07.png",
      title: "Perks & Benefits",
      description: "Enjoy a range of benefits that make your work experience enjoyable, from discounts to exclusive offers."
    },
    {
      icon: "/images/career/career-08.png",
      title: "Innovative & Creative Culture",
      description: "We value fresh ideas! Work in a space where creativity is encouraged, and your input shapes the future of pickleball."
    }
  ];

  return (
    <section className="career-benefits section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section__header">
              <h2 className="section__title">Why Join Us?</h2>
            </div>
          </div>
        </div>
        <div className="row g-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="benefit-card">
                <div className="benefit-card__icon">
                  <img src={benefit.icon} alt={benefit.title} />
                </div>
                <div className="benefit-card__content">
                  <h3 className="benefit-card__title">{benefit.title}</h3>
                  <p className="benefit-card__text">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerBenefits; 
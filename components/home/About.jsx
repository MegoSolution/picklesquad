import Link from 'next/link';

const About = () => {
  return (
    <section
      className="section about--secondary wow fadeInUp"
      style={{ marginTop: 0, paddingTop: 0 }}
      data-wow-duration="0.4s"
    >
      {/* Main Content */}
      <div className="container-lg text-center">
        <div className="pt-50 flex flex-column align-items-center">
          <img
            src="/images/home/about.jpg"
            alt="Background Image"
            className="about-background-image"
          />
          <h2
            className="text-white"
            style={{
              marginTop: 50,
            }}
          >
            Our Journey
          </h2>
          <div style={{ marginTop: 50 }}>
            <p
              style={{
                fontWeight: 200,
                color: '#F1F1F1FF',
              }}
            >
              In 2024, five young pickleball enthusiasts, all born after the
              2000s, came together with a bold vision: to create not just a
              venue but a true destination where pickleball and community come
              together. Fueled by our passion for the sport, we founded Pick-
              leSquad—a space designed for players to escape the stresses of
              daily life, unwind, and connect with others who share the same
              love for the game.
            </p>
            <p
              style={{
                fontWeight: 200,
                color: '#F1F1F1FF',
              }}
            >
              Our mission extends beyond offering state-of-the-art,
              tournament-grade courts. We aim to build an environment where
              friend- ships flourish, laughter echoes, and pickleball evolves
              into more than just a pastime—it becomes a lifestyle. As the
              fastest-growing sport in the world, pickleball presents endless
              opportunities, and we saw its potential to transform how people
              engage with sports and each other. Our goal is ambitious yet
              clear: to establish Penang’s premier pickleball venue, set- ting
              the gold standard for play, community, and relaxation.
            </p>
          </div>

          <div className="button-container align-items-center justify-content-center pt-5">
            <Link
              href="/programmes"
              className="cmn-button-home"
              style={{
                backgroundColor: '#FFFFFFFF',
                color: '#2C58A8',
              }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

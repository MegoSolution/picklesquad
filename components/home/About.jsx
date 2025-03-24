import Link from 'next/link';

const About = () => {
  return (
    <section
      className="section about--secondary wow fadeInUp"
      style={{ marginTop: 0, paddingTop: 0, paddingBottom: 0}}
      data-wow-duration="0.4s"
    >
      <div id="Intro" className="about-session-section">
        <div className="image-container-about">
          <img
            src="/images/home/picklesquad_our_journey.png"
            alt="Our Journey Session"
            className="session-image"
          />
        </div>
        <div className="text-container-about">
          <div className="about-content">
            <h2 className="title-our-journey">
              Our Journey
            </h2>
            <p>
              In 2024, five young pickleball enthusiasts, all born after the
              2000s, came together with a bold vision: to create not just a
              venue but a true destination where pickleball and community come
              together. Fueled by our passion for the sport, we founded PickleSquad—a 
              space designed for players to escape the stresses of
              daily life, unwind, and connect with others who share the same
              love for the game.
            </p>
            <p>
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

            {/* Join Us Button */}
            <a href="/book" className="session2-btn">
            Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


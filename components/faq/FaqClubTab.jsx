const FaqClubTab = () => {
  return (
    <div
      className="tab-pane fade show active"
      id="faqClub"
      role="tabpanel"
      aria-labelledby="faqClub-tab"
    >
      <div className="faq__tab-single__inner">
        <div className="accordion" id="accordionClub">
          <div className="accordion-item">
            <h5 className="accordion-header mt-0" id="headingClubOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseClubOne"
                aria-expanded="false"
                aria-controls="collapseClubOne"
              >
                What is pickleball?
              </button>
            </h5>
            <div
              id="collapseClubOne"
              className="accordion-collapse collapse"
              aria-labelledby="headingClubOne"
              data-bs-parent="#accordionClub"
            >
              <div className="accordion-body">
                <p>
                  Originally invented in 1965 in the U.S., pickleball has rapidly grown into one of the world's fastest-growing sports. Its popularity is driven by its accessibility, social nature, and health benefits—providing a great workout while being easy on the joints.
                </p>
                <p>
                  Pickleball is a fun and fast-paced sport that combines elements of tennis, badminton, and ping pong. Played on a smaller court with a paddle and a perforated plastic ball, making it easy to learn and enjoyable for all ages and skill levels.
                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h5 className="accordion-header mt-4" id="headingClubTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseClubTwo"
                aria-expanded="false"
                aria-controls="collapseClubTwo"
              >
                What equipment do I need to play?
              </button>
            </h5>
            <div
              id="collapseClubTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingClubTwo"
              data-bs-parent="#accordionClub"
            >
              <div className="accordion-body">
                <p>
                  To get started, you'll need a pickleball paddle, a pickleball (a lightweight plastic ball with holes), and comfortable sportswear. Non-marking sports shoes are recommended for better grip and safety on the court. At PickleSquad, we offer equipment rentals and sales, so you can jump into the game even if you don't have your own gear.
                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h5 className="accordion-header mt-4" id="headingClubThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseClubThree"
                aria-expanded="false"
                aria-controls="collapseClubThree"
              >
                I'm new to pickleball. How do I get started?
              </button>
            </h5>
            <div
              id="collapseClubThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingClubThree"
              data-bs-parent="#accordionClub"
            >
              <div className="accordion-body">
                <p>
                  Pickleball is beginner-friendly, and getting started is simple! Here's how:
                </p>
                <ul>
                  <li><strong>Join a Beginner Group Lesson</strong> – Our structured beginner classes cover the basics, including rules, scoring, and essential techniques like serving, returning, and volleying.</li>
                  <li><strong>Start with Social Play</strong> – Our social play sessions allow new players to meet fellow enthusiasts and get comfortable with the game in a relaxed, friendly environment.</li>
                  <li><strong>Ask Questions & Learn from Others</strong> – The pickleball community is welcoming and always happy to guide newcomers. Don't hesitate to ask about rules, strategies, or where to find playing partners.</li>
                  <li><strong>Keep Practicing!</strong> – The more you play, the better you'll get. Regular practice will help you gain confidence, improve your reflexes, and have more fun on the court.</li>
                </ul>
                <p>
                  Everyone starts as a beginner—embrace the learning process, enjoy the game, and most importantly, have fun!
                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h5 className="accordion-header mt-4" id="headingClubFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseClubFour"
                aria-expanded="false"
                aria-controls="collapseClubFour"
              >
                How many players are needed for a game?
              </button>
            </h5>
            <div
              id="collapseClubFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingClubFour"
              data-bs-parent="#accordionClub"
            >
              <div className="accordion-body">
                <p>
                  Pickleball can be played in singles (one-on-one) or doubles (two-on-two). Doubles is the most popular format, as it allows for longer rallies, strategic teamwork, and a more social experience.
                </p>
                <p>
                  If you're worried about getting too tired, consider bringing two extra friends, making it a group of six. This way, you can rotate players and keep the game going while taking short breaks!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqClubTab;

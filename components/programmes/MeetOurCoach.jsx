const Intro = () => {
  return (
    <div id="Intro" className="coach-session-section">
      <div className="text-container-coach">
        <div className="session-content">
          <h5 className="sub-title">Tony</h5>
          <h2 className="title">
            Meet Our <br /> Coach
          </h2>
          <p>
          Coach Tony is one of the pioneer pickleball coaches in Penang, widely recognized for his expertise and dedication to the sport. As a certified coach in both pickleball and squash, he has been instrumental in developing the local pickleball community. Besides, He is the founder of the esteemed Stoneline Pickleball Social Club, where he has coached over 500 students and organized more than 200 social pickleball sessions. With over 100 private coaching sessions for children and adults, he brings a personalized and professional approach to improving player skills. His achievements include winning the Intermediate Champion title at the FUPPA Penang Pickleball 1st Doubles Closed Tournament 2024. Coach Tony’s pioneering efforts and passion for pickleball make him a cornerstone of the sport in Penang.          
          </p>

        </div>
      </div>
      <div className="image-container">
        <img
          src="/images/programmes/coach.jpg"
          alt="Coach Session"
          className="session-image"
        />
      </div>
    </div>
  );
};

export default Intro;

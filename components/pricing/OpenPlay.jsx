const Intro = () => {
  return (
    <div id="Intro" className="coach-session-section">
      <div className="text-container">
        <div className="session-content">
          
          <h2 className="title2">
          Open Play
          </h2>
          <p className="session-description">
          No partner? No problem! Our Open Play sessions are all about
fun, fast-paced games and meeting new players. Just show up,
grab a paddle, and rotate in for exciting matches with players
of all skill levels. It’s the perfect way to enjoy pickleball without
the hassle of booking a court—just pure action and great vibes!
<br  /><br  />
Whether you're looking to sharpen your skills, enjoy a friendly
rally, or simply unwind after a long day, Open Play is where the
community comes together.
<br  /><br  />
Join the squad, make new friends, and experience the
best way to play pickleball!        
          </p>

          {/* Table Section */}
           {/* Drop-in Rate Section */}
           <table className="info-table">
            <tbody>
              <tr>
                <td>Drop in Rate <br  /> RM50/Session</td>
              </tr>
              
            </tbody>
          </table>

          {/* Join Us Button */}
          <a href="/book" className="cmn-button-pricing2">
          Learn More
          </a>
        </div>
      </div>
      <div className="image-container-coach2">
        <img
          src="/images/pricing/openplay.jpg"
          alt="Coach Session"
          className="session-image"
        />
      </div>
    </div>
  );
};

export default Intro;

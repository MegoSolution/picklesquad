const JoinUs = () => {
  return (
    <div id="Intro" className="coach-session-section">
      <div className="image-container-coach">
        <img
          src="/images/home/first-time.jpg"
          alt="Court"
          className="session-image"
        />
      </div>
      <div className="text-container-coach">
        <div className="session-content">
          
          <h2 className="title-coach">
          Private Event
          </h2>
          <p>
          Host your next event with a unique twist! Whether it’s a
corporate team-building session, birthday celebration, or
exclusive tournament, our courts provide the perfect space
for an exciting and memorable gathering. Enjoy a seamless
experience with customizable options tailored to your needs.
<br /> <br />
Let us handle the details while you focus on the fun—rally with
friends, bond with colleagues, and create lasting memories on
the court. Get in touch with us today to start planning your
event!         
          </p>

          {/* Table Section */}
          {/* Drop-in Rate Section */}
          <table className="info-table-2">
            <tbody>
              <tr>
                <td>Pricing<br  /> Customizable , Upon on Request</td>
              </tr>
              
            </tbody>
          </table>

          {/* Join Us Button */}
          <a href="/book" className="cmn-button-court-rental">
          Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
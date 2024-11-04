import ContactItemCart from "../card/ContactItemCart";

const contactInfo = [
  {
    id: 1,
    title: "Call Now",
    icon: "golftio-phone",
    contact_by: ["(907) 555-0101", "(252) 555-0126"],
  },
  {
    id: 2,
    title: "Email Address",
    icon: "golftio-email",
    contact_by: ["sara.cruz@example.com", "bill.sanders@example.com"],
  },
  {
    id: 3,
    title: "Location",
    icon: "golftio-pin-location",
    contact_by: [
      "Royal Ln. Mesa, New Jersey 45463",
      "Thornridge Cir. Shiloh, Hawaii 81063",
    ],
  },
];

const ContactBody = () => {
  return (
    <section className="section contact wow fadeInUp" data-wow-duration="0.4s">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="section__header">
              <h2 className="section__header-title">Contact Us</h2>
              <p>
                Golftio Sports Club is a golf club with a history that goes back
                to XX century. From a cricket club to soccer tournaments,
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center section__row">
          {contactInfo.map((info) => (
            <div
              key={info.id}
              className="col-sm-6 col-lg-4 col-xl-4 section__col"
            >
              <ContactItemCart info={info} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactBody;

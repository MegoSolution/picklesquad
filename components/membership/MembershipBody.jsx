const { default: MembershipForm } = require("./MembershipForm");

const MembershipBody = () => {
  return (
    <section className="membership membership--main section_pricing">
      <div className="container">
        <div className="row justify-content-center section__row">
          <MembershipForm />
        </div>
      </div>
    </section>
  );
};

export default MembershipBody; 
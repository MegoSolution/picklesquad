const { default: LeftSide } = require("./LeftSide");
const { default: RightSide } = require("./RightSide");

const ShopBody = () => {
  return (
    <section className="shop shop--main section">
      <div className="container">
        <div className="row justify-content-center section__row">
          {/* Left Side */}
          <LeftSide />

          {/* Right Side */}
          <RightSide />
        </div>
      </div>
    </section>
  );
};

export default ShopBody;

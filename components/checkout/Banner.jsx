import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Checkout">
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["Checkout", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;

import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Cart">
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["Cart", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;

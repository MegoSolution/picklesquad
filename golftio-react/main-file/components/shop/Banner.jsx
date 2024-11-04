import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Shop">
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["Shop", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;

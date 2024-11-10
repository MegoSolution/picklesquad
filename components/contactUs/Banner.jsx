import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Contact Us">
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["Contact Us", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;

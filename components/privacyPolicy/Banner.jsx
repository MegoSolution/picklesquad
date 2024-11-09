import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Privacy Policy">
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["Privacy Policy", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;

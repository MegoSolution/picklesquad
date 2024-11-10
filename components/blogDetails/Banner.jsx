import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Blog Details">
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["Blog", "/blog"],
          ["Blog Details", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;

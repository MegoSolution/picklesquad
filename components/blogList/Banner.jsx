import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Blog List">
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["Blog", "/blog"],
          ["Blog List", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;

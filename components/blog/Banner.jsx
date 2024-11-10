import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Blog Grid">
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["Blog", "/blog"],
          ["Blog Grid", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;

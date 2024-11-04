import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Product Single">
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["Product Single", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;

import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Pricing Plan">
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["Pricing Plan", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;

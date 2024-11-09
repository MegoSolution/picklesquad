import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="About Us">
      <Breadcrumb
        breadcrumbs={[
          ["Hemo", "/"],
          ["About Us", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;

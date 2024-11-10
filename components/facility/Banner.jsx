import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Facility">
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["Facility", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;

import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Facility Details">
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["Facility", "/facility"],
          ["Facility Details", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;

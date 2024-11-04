import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Join Club">
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["Join Club", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;

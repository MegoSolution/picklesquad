import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Select Location">
      <Breadcrumb
        breadcrumbs={[
          ["User Dashboard", "/profile"],
          ["Location", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;

import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Support">
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["Support", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;

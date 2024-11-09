import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="FAQ">
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["FAQ", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;

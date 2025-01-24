import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Terms and Condition">
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["Terms Of Use", "/terms-conditions"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;

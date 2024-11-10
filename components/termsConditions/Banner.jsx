import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Terms Of Use">
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["Terms Of Use", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;

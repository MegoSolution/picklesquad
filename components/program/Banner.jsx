import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="">
      <Breadcrumb
        breadcrumbs={[
          ["User Dashboard", "/"],
          ["Program", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;

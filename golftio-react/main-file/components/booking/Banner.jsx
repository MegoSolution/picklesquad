import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="">
      <Breadcrumb
        breadcrumbs={[
          ["User Dashboard", "/"],
          ["Booking", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;

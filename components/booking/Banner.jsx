import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Create Booking">
      <Breadcrumb
        breadcrumbs={[
          ["User Dashboard", "/profile"],
          ["Booking", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;

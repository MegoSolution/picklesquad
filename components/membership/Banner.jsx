import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Membership">
      <Breadcrumb
        breadcrumbs={[
          ["User Dashboard", "/profile"],
          ["Membership", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner; 
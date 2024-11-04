import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Chip Shot">
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["Chip Shot", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;

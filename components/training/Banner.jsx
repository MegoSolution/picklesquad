import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Trainings">
      <Breadcrumb
        breadcrumbs={[
          ["Home", "/"],
          ["Trainings", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;

import React from "react";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const Banner = () => {
  return (
    <SmallBanner title="Your Premium E-Card">
      <Breadcrumb
        breadcrumbs={[
          ["User Dashboard", "/"],
          ["E-Card", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;

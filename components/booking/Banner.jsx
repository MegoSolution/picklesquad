import React from 'react';
import SmallBanner from '../common/SmallBanner';
import Breadcrumb from '../breadcrumb/Breadcrumb';

const Banner = () => {
  return (
    <SmallBanner title="Your Receipt">
      <Breadcrumb
        breadcrumbs={[
          ['User Dashboard', '/'],
          ['Receipt', '/'],
        ]}
      />
    </SmallBanner>
  );
};

export default Banner;

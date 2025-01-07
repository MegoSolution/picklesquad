import Breadcrumb from "../breadcrumb/Breadcrumb";
import SmallBanner from "../common/SmallBanner";

const MembershipDetailBanner = () => {
  return (
    <SmallBanner title="Membership Payment">
      <Breadcrumb
        breadcrumbs={[
          ["User Dashboard", "/profile"],
          ["Membership", "/membership"],
          ["Membership Details", "/"],
        ]}
      />
    </SmallBanner>
  );
};

export default MembershipDetailBanner; 
import Banner from "@/components/membership/Banner";
import MembershipBody from "@/components/membership/MembershipBody";
import withAuth from "@/pages/withAuth";

function Membership() {
  return (
    <>
      <Banner />
      <MembershipBody />
    </>
  );
}

export default withAuth(Membership); 
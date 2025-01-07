import withAuth from "@/pages/withAuth";
import MembershipDetailBanner from '@/components/membershipDetail/Banner';
import MembershipDetailBody from '@/components/membershipDetail/MembershipDetailBody';


function MembershipDetails() {
  return (
    <>
      <MembershipDetailBanner />
      <MembershipDetailBody />
    </>
  );
}

export default withAuth(MembershipDetails); 
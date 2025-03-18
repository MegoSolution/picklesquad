import PricingBanner from "@/components/common/PricingBanner";
import CourtRental from "@/components/pricing/CourtRental";
import Programmes from "@/components/pricing/Programmes";
import PrivateLesson from "@/components/pricing/PrivateLesson";
import OpenPlay from "@/components/pricing/OpenPlay";
import PrivateEvent from "@/components/pricing/PrivateEvent";

export default function Pricing() {
  return (
    <>
     {/* Big Banner Secrtion */}
     <PricingBanner />

      {/* Banner Secrtion */}
      <CourtRental />

      {/* Banner Secrtion */}
      <Programmes />

      {/* Banner Secrtion */}
      <PrivateLesson />

       {/* Banner Secrtion */}
       <OpenPlay />

      {/* Banner Secrtion */}
      <PrivateEvent />
    </>
  );
}

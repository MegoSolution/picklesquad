import PricingBanner from "@/components/common/PricingBanner";
import CourtRental from "@/components/pricing/CourtRental";
import Programmes from "@/components/pricing/Programmes";

export default function Pricing() {
  return (
    <>
     {/* Big Banner Secrtion */}
     <PricingBanner />

      {/* Banner Secrtion */}
      <CourtRental />

      {/* Banner Secrtion */}
      <Programmes />
    </>
  );
}

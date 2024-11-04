import Banner from "@/components/facilityDetails/Banner";
import FacilityBody from "@/components/facilityDetails/FacilityBody";
import RelatedFacility from "@/components/facilityDetails/RelatedFacility";

export default function FacitityDetails() {
  return (
    <>
      {/* Banner Secrtion */}
      <Banner />

      {/* Facility Body Secrtion */}
      <FacilityBody />

      {/* Related Facility Secrtion */}
      <RelatedFacility />
    </>
  );
}

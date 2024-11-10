import JoinClub from "@/components/common/JoinClub";
import Sponsor from "@/components/common/Sponsor";
import Banner from "@/components/faq/Banner";
import FaqBody from "@/components/faq/FaqBody";

export default function Faq() {
  return (
    <>
      {/* Banner section */}
      <Banner />

      {/* Faq Body section */}
      <FaqBody />

      {/* Join Club section */}
      <JoinClub />

      {/* Sponsor section */}
      <Sponsor />
    </>
  );
}

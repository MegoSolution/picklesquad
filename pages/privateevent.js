import Banner from "@/components/privateevent/Banner";
import Host from "@/components/privateevent/Host";
import Customise from "@/components/privateevent/Customise";
import ContactEmail from "@/components/privateevent/ContactEmail";

export default function Pricing() {
  return (
    <>
     {/* Big Banner Section */}
     <Banner />

      {/* Host Section */}
      <Host />

      {/* Customise Section */}
      <Customise />

      {/* ContactEmail Section */}
      <ContactEmail />
    </>
  );
}

import Banner from "@/components/privateevent/Banner";
import Host from "@/components/privateevent/Host";
import Customise from "@/components/privateevent/Customise";
import Event from "@/components/privateevent/Event";
import WhyChooseUs from "@/components/privateevent/WhyChooseUs";
import ContactEmail from "@/components/privateevent/ContactEmail";
import EventType from "@/components/privateevent/EventType";

export default function Pricing() {
  return (
    <>
     {/* Big Banner Section */}
     <Banner />

      {/* Host Section */}
      <Host />

      {/* Customise Section */}
      <Customise />

      {/* Event Section */}
      <Event />

      {/* whychooseus Section */}
      <WhyChooseUs />

       {/* EventType Section */}
       <EventType />

      {/* ContactEmail Section */}
      <ContactEmail />
    </>
  );
}

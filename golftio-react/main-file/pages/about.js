import AboutUs from "@/components/about/AboutUs";
import Banner from "@/components/about/Banner";
import Club from "@/components/about/Club";
import Counter from "@/components/common/Counter";
import JoinClub from "@/components/common/JoinClub";
import Sponsor from "@/components/common/Sponsor";
import Team from "@/components/common/Team";
import Testimonial from "@/components/common/Testimonial";

export default function About() {
  return (
    <>
      {/* Banner section */}
      <Banner />

      {/* AboutUs section */}
      <AboutUs />

      {/* Club section */}
      <Club />

      {/* Team section */}
      <Team />

      {/* Counter section */}
      <Counter />

      {/* Testimonial section */}
      <Testimonial />

      {/* JoinClub section */}
      <JoinClub />

      {/* Sponsor section */}
      <Sponsor />
    </>
  );
}

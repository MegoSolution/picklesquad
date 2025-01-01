import Banner from "@/components/programmes/Banner";
import JoinUs from "@/components/programmes/JoinUs";
import Intro from "@/components/programmes/Intro";
import Beginner from "@/components/programmes/Beginner";
import Advance from "@/components/programmes/Advance";
import OpenPlay from "@/components/programmes/OpenPlay";


export default function Pricing() {
  return (
    <>
     {/* Big Banner Section */}
     <Banner />

      {/* JoinUs Section */}
      <JoinUs />
      {/* Beginner Section */}
      <Intro />
      {/* Beginner Section */}
      <Beginner />
      {/* Advance Section */}
      <Advance />
      {/* OpenPlay Section */}
      <OpenPlay />
      
    </>
  );
}

import ProgrammesBanner from "@/components/programmes/ProgrammesBanner";
import Intro from "@/components/programmes/ProgrammesIntro";
import Beginner from "@/components/programmes/ProgrammesBeginner";
import Advance from "@/components/programmes/ProgrammesAdvance";
import Private from "@/components/programmes/ProgrammesPrivate";
import Open from "@/components/programmes/ProgrammesOpen";
import JoinUs from "@/components/programmes/ProgrammesJoinUs";

export default function Pricing() {
  return (
    <>
     {/* Banner Section */}
     <ProgrammesBanner />
      {/* Inro Section */}
      <Intro />
      {/* Beginner Section */}
      <Beginner />
      {/* Advance Section */}
      <Advance />
      {/* Private Section */}
      <Private />
      {/* Open Section */}
      <Open />
      {/* JoinUs Section */}
      <JoinUs />
      
    </>
  );
}

import JoinClub from "@/components/common/JoinClub";
import Sponsor from "@/components/common/Sponsor";
import Banner from "@/components/trainingDetails/Banner";
import TrainingDetailsBody from "@/components/trainingDetails/TrainingDetailsBody";

export default function TrainingDetails() {
  return (
    <>
      {/* Banner Secrtion */}
      <Banner />

      {/* Training Details Body Secrtion */}
      <TrainingDetailsBody />

      {/* JoinClub Secrtion */}
      <JoinClub />

      {/* Sponsor Secrtion */}
      <Sponsor />
    </>
  );
}

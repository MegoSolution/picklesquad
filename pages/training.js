import JoinClub from "@/components/common/JoinClub";
import Sponsor from "@/components/common/Sponsor";
import Banner from "@/components/training/Banner";
import Trainings from "@/components/training/Trainings";

export default function Training() {
  return (
    <>
      {/* Banner Secrtion */}
      <Banner />

      {/* Trainings Secrtion */}
      <Trainings />

      {/* JoinClub Secrtion */}
      <JoinClub />

      {/* Sponsor Secrtion */}
      <Sponsor />
    </>
  );
}

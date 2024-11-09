import Banner from "@/components/gallery/Banner";
import GalleryImags from "@/components/gallery/GalleryImags";
import GalleryPopup from "@/components/gallery/GalleryPopup";
import GallerySlider from "@/components/gallery/GallerySlider";

export default function Gallery() {
  return (
    <>
      {/* Banner Secrtion */}
      <Banner />

      {/* Gallery Imags Secrtion */}
      <GalleryImags />

      {/* Gallery Slider Secrtion */}
      <GallerySlider />

      {/* Gallery Popup Secrtion */}
      <GalleryPopup />
    </>
  );
}

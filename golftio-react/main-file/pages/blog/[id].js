import Banner from "@/components/blogDetails/Banner";
import BlogDetailsBody from "@/components/blogDetails/BlogDetailsBody";
import RelatedNews from "@/components/blogDetails/RelatedNews";
import Sponsor from "@/components/common/Sponsor";

export default function BlogDetails() {
  return (
    <>
      {/* Banner Secrtion */}
      <Banner />

      {/* BlogDetails Body Secrtion */}
      <BlogDetailsBody />

      {/* Related News Secrtion */}
      <RelatedNews />

      {/* Sponsor Secrtion */}
      <Sponsor />
    </>
  );
}

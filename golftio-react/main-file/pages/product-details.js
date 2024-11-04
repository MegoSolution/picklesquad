import Banner from "@/components/productDetails/Banner";
import ProductDescription from "@/components/productDetails/ProductDescription";
import RelatedProduct from "@/components/productDetails/RelatedProduct";
import Review from "@/components/productDetails/Review";

export default function ProductDetails() {
  return (
    <>
      {/* Banner Secrtion */}
      <Banner />

      {/* Product Description Secrtion */}
      <ProductDescription />

      {/* Review Secrtion */}
      <Review />

      {/* Related Product Secrtion */}
      <RelatedProduct />
    </>
  );
}

import Preloader from "../preloader/Preloader";
import ScrollToTop from "../scrollToTop/ScrollToTop";

const Layout = ({ children }) => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {children}

      {/* Scroll To Top */}
      <ScrollToTop />
    </>
  );
};

export default Layout;

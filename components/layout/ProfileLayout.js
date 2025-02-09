// components/layout/ProfileLayout.js
import Preloader from "../preloader/Preloader";
import ScrollToTop from "../scrollToTop/ScrollToTop";

const ProfileLayout = ({ children }) => {
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

export default ProfileLayout;
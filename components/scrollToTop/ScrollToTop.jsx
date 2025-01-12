import { useEffect, useState } from "react";

const WhatsAppButton = () => {
  const [windowHeight, setWindowHeight] = useState(0);

  // Function to handle WhatsApp redirection
  const goToWhatsAppHandler = () => {
    const whatsappNumber = "60123164698"; // Replace with your WhatsApp number
    const defaultMessage = "Hello, I would like to inquire about your court.";
    const encodedMessage = encodeURIComponent(defaultMessage);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappLink, "_blank");
  };

  const trackScrollPosition = () => {
    if (typeof window !== "undefined") {
      const height = window.scrollY;
      setWindowHeight(height);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", trackScrollPosition);
    return () => {
      window.removeEventListener("scroll", trackScrollPosition);
    };
  }, []);

  return (
    <button
      type="button"
      className={`scrollToTop ${windowHeight > 200 ? "active" : ""}`}
      onClick={goToWhatsAppHandler}
    >
      <i className="fa-brands fa-whatsapp"></i>
    </button>
  );
};

export default WhatsAppButton;

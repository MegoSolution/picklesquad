import { useEffect } from "react";

const WhatsAppButton = () => {
  // Function to handle WhatsApp redirection
  const goToWhatsAppHandler = () => {
    const whatsappNumber = "60123164698"; // Replace with your WhatsApp number
    const defaultMessage = "Hello, I would like to inquire about your court.";
    const encodedMessage = encodeURIComponent(defaultMessage);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <button
      type="button"
      className="scrollToTop active"
      onClick={goToWhatsAppHandler}
    >
      <i className="fa-brands fa-whatsapp"></i>
    </button>
  );
};

export default WhatsAppButton;

import Image from "next/image";
import Link from "next/link";
import logo_light from "/public/images/Picklesquad_image/logo-07.png";

const Footer = () => {
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: "#2C58A8",
        color: "#FFFFFF",
        paddingBottom: "20px",
      }}
    >
      <div className="container">
        <div className="row">
          {/* Left Column: Quick Links */}
          <div className="col-lg-4 col-md-4 text-center text-lg-start">
            <div className="footer__single-content">
              <h5>Quick Links</h5>
              <ul className="footer-links">
                <li>
                  <Link href="/faq" style={{ color: "#FFFFFF" }}>
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/#our-outlets" style={{ color: "#FFFFFF" }}>
                    Location
                  </Link>
                </li>
                <li>
                  <Link href="/career" style={{ color: "#FFFFFF" }}>
                    Career
                  </Link>
                </li>
                <li>
                  <Link href="/programmes" style={{ color: "#FFFFFF" }}>
                    Upcoming Event
                  </Link>
                </li>
                
              </ul>
            </div>
          </div>

          {/* Center Column: Contact Us */}
          <div className="col-lg-4 col-md-4 text-center text-lg-start">
            <div className="footer__single-content">
              <h5>Contact Us</h5>
              <p>(+60) 12-316 4698</p>
              <p>picklesquad624@gmail.com</p>
              
            </div>
          </div>

          {/* Right Column: Social Links */}
          <div className="col-lg-4 col-md-4 text-center">
            <div className="footer__single">
              <h5>Social</h5>
              <ul
                className="social-icons horizontal-icons"
                style={{
                  listStyleType: "none",
                  padding: 0,
                  display: "flex",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                <li>
                  <Link href="https://www.instagram.com/picklesquad.my/">
                    <Image
                      src="/images/footer/ig.png"
                      alt="Instagram"
                      width={50}
                      height={50}
                    />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.facebook.com/">
                    <Image
                      src="/images/footer/fb.png"
                      alt="Facebook"
                      width={50}
                      height={50}
                    />
                  </Link>
                </li>
                <li>
                  <Link href="https://www.xiaohongshu.com/">
                    <Image
                      src="/images/footer/xhs.png"
                      alt="Xiaohongshu"
                      width={50}
                      height={50}
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr style={{ borderColor: "#FFFFFF" }} />

        {/* Footer Bottom */}
        <div className="row">
          <div className="col-12 text-center">
            <ul
              className="footer-bottom-links"
              style={{
                listStyleType: "none",
                padding: 0,
                margin: "10px 0",
                fontSize: "14px",
              }}
            >
             
              <li style={{ display: "inline-block", marginRight: "15px" }}>
                <Link href="/terms-conditions" style={{ color: "#FFFFFF" }}>
                  Terms & Conditions
                </Link>
                <span style={{ marginLeft: "10px", color: "#FFFFFF" }}>|</span>
              </li>
              <li style={{ display: "inline-block" }}>
                <Link href="/privacy-policy" style={{ color: "#FFFFFF" }}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
            <p
              style={{
                marginBottom: "10px",
                padding: "10px 0",
                fontSize: "16px",
                color: "#FFFFFF",
              }}
            >
              &copy; 2024 Picklesquad Sdn Bhd (202401043375) All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
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
          {/* Left Column: Logo */}
          <div className="col-lg-3 col-md-3 text-center text-lg-start">
            <div className="footer__single-content">
              <Link href="/" className="footer__single-logo">
                <Image src={logo_light} alt="Logo" width={150} height={50} />
              </Link>
            </div>
          </div>

          {/* Center Column: Quick Links */}
          <div className="col-lg-3 col-md-3 text-center text-lg-start">
  <div className="footer__single-content">
    <ul className="footer-links">
      <li>
        <Link href="/" style={{ color: "#FFFFFF" }}>
          About Us
        </Link>
      </li>
      <li>
        <Link href="/programmes" style={{ color: "#FFFFFF" }}>
          Programmes
        </Link>
      </li>
      <li>
        <Link href="/private-event" style={{ color: "#FFFFFF" }}>
          Private Event
        </Link>
      </li>
      <li>
        <Link href="/pricing" style={{ color: "#FFFFFF" }}>
          Pricing
        </Link>
      </li>
      <li>
        <Link href="/contact-us" style={{ color: "#FFFFFF" }}>
          Contact Us
        </Link>
      </li>
    </ul>
  </div>
</div>

          {/* Right Column: Contact Us */}
          <div className="col-lg-3 col-md-3 text-center text-lg-start">
            <div className="footer__single-content">
              <h5>Contact Us</h5>
              <p>(+60) 12-316 4698</p>
              <p>picklesquad624@gmail.com</p>
              <h5>Jelutong</h5>
              <p>Picklesquad Sdn Bhd (202401043375) <br/>
              175, Jalan Jelutong , 11600 Georgetown , Penang , Malaysia</p>
              <h5>Bukit Mertajam</h5>
              <p>Bukit Mertajam, 14000 Penang</p>
            </div>
          </div>

          {/* Social Column */}
          <div className="col-lg-3 col-md-3 text-center">
            <div className="footer__single">
              <h5>Social</h5>
              <ul
                className="social-icons horizontal-icons"
                style={{
                  listStyleType: "none",
                  padding: 0,
                  display: "flex",
                  justifyContent: "center", // Center icons horizontally
                  gap: "10px", // Add space between icons
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
            <p
              style={{
                marginBottom: "10px",
                padding: "10px 0",
                fontSize: "18px",
                color: "#FFFFFF",
              }}
            >
              &copy; 2024 PickleSquad. All rights reserved.
            </p>
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
                <Link href="/support" style={{ color: "#FFFFFF" }}>
                  Support
                </Link>
                <span style={{ marginLeft: "10px", color: "#FFFFFF" }}>|</span>
              </li>
              <li style={{ display: "inline-block", marginRight: "15px" }}>
                <Link href="/terms-conditions" style={{ color: "#FFFFFF" }}>
                  Terms of Use
                </Link>
                <span style={{ marginLeft: "10px", color: "#FFFFFF" }}>|</span>
              </li>
              <li style={{ display: "inline-block" }}>
                <Link href="/privacy-policy" style={{ color: "#FFFFFF" }}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

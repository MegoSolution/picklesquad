import Image from "next/image";
import Link from "next/link";
import logo_light from "/public/images/Picklesquad_image/logo-07.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          {/* Left Column */}
          <div className="col-lg-4 col-md-4">
            <div className="footer__single-content">
              <Link href="/" className="footer__single-logo">
                <Image src={logo_light} alt="Logo" />
              </Link>

              <div className="footer__single">
                <div className="footer__single-social">
                  <h5>Social</h5>
                  <ul className="social-icons horizontal-icons">
                    <li>
                      <Link href="/">
                        <Image
                          src="/images/picklesquad_image/footer/ig.png"
                          alt="Instagram"
                          width={45}
                          height={45}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="https://www.instagram.com/picklesquad.my/">
                        <Image
                          src="/images/picklesquad_image/footer/fb.png"
                          alt="Instagram"
                          width={45}
                          height={45}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <Image
                          src="/images/picklesquad_image/footer/xhs.png"
                          alt="Instagram"
                          width={45}
                          height={45}
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Center Column */}
          <div className="col-lg-4 col-md-4">
            <div className="footer__single-content">
              <h5>Quick Links</h5>
              <div className="footer__single-content">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  <li>
                    <Link href="/facility">Facility</Link>
                  </li>
                  <li>
                    <Link href="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link href="/contact-us">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-4 col-md-4">
            <div className="footer__single-content">
              <h5>Address</h5>
              <div className="footer__single-content">
                <div className="footer__single-content__group">
                  <p>(480) 555-0103</p>
                  <p>(406) 555-0120</p>
                </div>
                <div className="footer__single-content__group">
                  <p>picklesquad624@gmail.com</p>
                </div>
                <div className="footer__single-content__group">
                  <p>116, Jalan Jelutong, Jelutong, 11600 George Town, Pulau Pinang</p>
                </div>
                <div className="google-maps">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.106378228659!2d100.3226291979826!3d5.400760967642268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac3c83808b273%3A0x85f16b7077c9e2f!2s116%2C%20Jalan%20Jelutong%2C%20Jelutong%2C%2011600%20George%20Town%2C%20Pulau%20Pinang!5e0!3m2!1sen!2smy!4v1734620241102!5m2!1sen!2smy"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col-12">
            <div className="copyright">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <p className="copyright-text">
                    Copyright &copy; <span id="copyYear"></span> 2024 PickleSquad.
                    All Rights Reserved 202401043375 (1589221­A)
                  </p>
                </div>

                <div className="col-lg-6">
                  <ul>
                    <li>
                      <Link href="/support">Support</Link>
                    </li>
                    <li>
                      <Link href="/terms-conditions">Terms of Use</Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy">Privacy Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

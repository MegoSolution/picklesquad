import Image from "next/image";
import Link from "next/link";
import Social from "../social/Social";
import logo_light from "/public/images/logo-light.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row section__row">
          <div className="col-md-6 col-lg-4 col-xl-3 section__col">
            <div className="footer__single">
              <Link href="/" className="footer__single-logo">
                <Image src={logo_light} alt="Logo" />
              </Link>
              <div className="footer__single-content">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry...
                </p>
                {/* Socila */}
                <Social
                  items={[
                    ["fa-facebook-f", "/"],
                    ["fa-twitter", "/"],
                    ["fa-square-instagram", "/"],
                    ["fa-linkedin-in", "/"],
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-2 col-xl-3 section__col">
            <div className="footer__single">
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
          <div className="col-md-6 col-lg-3 col-xl-3 section__col">
            <div className="footer__single">
              <h5>Address</h5>
              <div className="footer__single-content">
                <div className="footer__single-content__group">
                  <p>(480) 555-0103</p>
                  <p>(406) 555-0120</p>
                </div>
                <div className="footer__single-content__group">
                  <p>deanna.curtis@example.com</p>
                  <p>debra.holt@example.com</p>
                </div>
                <div className="footer__single-content__group">
                  <p>285 Great North Road, Grey Lynn, Auckland 1021</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 col-xl-3 section__col">
            <h5>Newsletter</h5>
            <div className="footer__single">
              <div className="footer__single-content">
                <p>Subscribe our newsletter to get our latest update & news </p>
                <form action="#" method="post" name="newsletterForm">
                  <div className="newsletter">
                    <input
                      type="email"
                      name="news-mail"
                      id="newsMail"
                      placeholder="Your email address"
                      required
                    />
                    <button type="submit">
                      <i className="golftio-paper-plane"></i>
                    </button>
                  </div>
                </form>
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
                  <p>
                    Copyright &copy; <span id="copyYear"></span> 2023 Golftio.
                    All Rights Reserved{" "}
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

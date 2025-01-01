import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navData } from "./navData";
import Logo_light from "/public/images/Picklesquad_image/logo-07.png";
import Logo from "/public/images/Picklesquad_image/logo-07.png";
import { useRouter } from 'next/router';
import { useSelector } from "react-redux";
import HandleLogout from "../auth/SignOutBody";

const NavBar = ({ cls = "header--secondary" }) => {
  const [windowHeight, setWindowHeight] = useState(0);
  const [active, setActive] = useState(false);
  const [dropdownId, setDropdownId] = useState("");
  const [subDropdown, setSubDropdown] = useState("");
  const [user, setUser] = useState(null);
  const router = useRouter();

  const handleActive = () => {
    setActive(false);
    setDropdownId("");
    setSubDropdown("");
  };

  const handleDropdown = (id) => {
    setDropdownId((prevId) => (prevId === id ? "" : id));
    setSubDropdown("");
  };

  const handleSubDropdown = (id) => {
    setSubDropdown((prevId) => (prevId === id ? "" : id));
  };

  const navBarTop = () => {
    if (typeof window !== "undefined") {
      setWindowHeight(window.scrollY);
    }
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser);
    window.addEventListener("scroll", navBarTop);
    return () => {
      window.removeEventListener("scroll", navBarTop);
    };
  }, []);

  const handleBookNowClick = () => {
    if (user) {
      router.push('/booking');
    } else {
      router.push('/sign-in?redirect=/booking');
    }
  };

  return (
    <header className={`header ${cls} ${windowHeight > 50 ? "header-active" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="nav">
              <div className="nav__content">
                <div className="nav__logo">
                  <Link href="/">
                    <Image src={cls === "" ? Logo : Logo_light} alt="Logo" />
                  </Link>
                </div>
                <div className={`nav__menu ${active ? "nav__menu-active" : ""}`}>
                  <div className="nav__menu-logo d-flex d-xl-none">
                    <Link href="/" className="text-center hide-nav">
                      <Image src={cls === "" ? Logo : Logo_light} alt="Logo" />
                    </Link>
                    <button
                      className="nav__menu-close bg-transparent"
                      onClick={() => setActive(false)}
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>

                  <ul className="nav__menu-items">
                    {navData.map(({ itm, url, id, dropdown, dropdown_itms }) => {
                      return dropdown ? (
                        <li key={id} className="nav__menu-item nav__menu-item--dropdown">
                          <Link
                            href="#"
                            onClick={() => handleDropdown(id)}
                            className={`nav__menu-link nav__menu-link--dropdown ${
                              dropdownId === id ? "nav__menu-link--dropdown-active" : ""
                            }`}
                          >
                            {itm}
                          </Link>
                          {dropdown_itms && (
                            <ul
                              className={`nav__dropdown ${
                                dropdownId === id ? "nav__dropdown-active" : ""
                              }`}
                            >
                              {dropdown_itms.map(({ id, dp_itm, url, sbu_dropdown, sub_items }) =>
                                sbu_dropdown ? (
                                  <li key={id} className="nav__menu-link-child">
                                    <Link
                                      href="#"
                                      onClick={() => handleSubDropdown(id)}
                                      className="nav__dropdown-item nav__menu-link--dropdown nav__menu-link-childr"
                                    >
                                      {dp_itm}
                                    </Link>
                                    {sub_items && (
                                      <ul
                                        className={`nav__dropdown-child ${
                                          subDropdown === id ? "nav__dropdown-active" : ""
                                        }`}
                                      >
                                        {sub_items.map(({ id, url, sub_itm }) => (
                                          <li key={id}>
                                            <Link
                                              href={url}
                                              onClick={handleActive}
                                              className="nav__dropdown-item hide-nav"
                                            >
                                              {sub_itm}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    )}
                                  </li>
                                ) : (
                                  <li key={id}>
                                    <Link
                                      href={url}
                                      onClick={handleActive}
                                      className="nav__dropdown-item hide-nav"
                                    >
                                      {dp_itm}
                                    </Link>
                                  </li>
                                )
                              )}
                            </ul>
                          )}
                        </li>
                      ) : (
                        <li key={id} className="nav__menu-item">
                          <Link href={url} className="nav__menu-link" onClick={handleActive}>
                            {itm}
                          </Link>
                        </li>
                      );
                    })}

                    {/* Sign In/Sign Up or Book Now */}
                    {!user ? (
                      <li className="nav__menu-item d-block d-md-none">
                        <Link href="/sign-in" className="cmn-button cmn-button--secondary">
                          Sign In
                        </Link>
                      </li>
                    ) : (
                      <li className="nav__menu-item d-block d-md-none">
                        <button onClick={handleBookNowClick} className="cmn-button cmn-button--secondary">
                          Book Now
                        </button>
                      </li>
                    )}
                  </ul>

                </div>

                <div className="nav__uncollapsed">
                  <div className="nav__uncollapsed-item d-none d-md-flex">
                    {router.pathname !== '/sign-in' && router.pathname !== '/sign-up' && (
                    <>
                      {!user ? (
                        <>
                          <Link href="/sign-in" className="cmn-button cmn-button-nav">
                            Sign In
                          </Link>
                          <button onClick={handleBookNowClick} className="btn btn-light book-now-btn-nav">
                            Book Now
                          </button>
                        </>
                      ) : (
                        <button onClick={handleBookNowClick} className="btn btn-light book-now-btn-nav">
                          Book Now
                        </button>
                      )}
                    </>
                    )}
                  </div>
                  <button
                    className="nav__bar d-block d-xl-none"
                    onClick={() => setActive(!active)}
                  >
                    <span className="icon-bar top-bar"></span>
                    <span className="icon-bar middle-bar"></span>
                    <span className="icon-bar bottom-bar"></span>
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className={`backdrop ${active ? "backdrop-active" : ""}`}></div>
    </header>
  );
};

export default NavBar;

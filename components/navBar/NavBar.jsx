import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navData } from "./navData";
import Logo_light from "/public/images/Picklesquad_image/logo-07.png";
import Logo from "/public/images/Picklesquad_image/logo-07.png";
import { useSelector } from 'react-redux';
import HandleLogout from '../auth/SignOutBody';

const NavBar = ({ cls = "header--secondary" }) => {
  const [windowHeight, setWindowHeight] = useState(0);
  const [active, setActive] = useState(false);
  const [dropdownId, setDropdownId] = useState("");
  const [subDropdown, setSubDropdown] = useState("");
  const user = useSelector((state) => state.user);

  const handleActive = () => {
    setActive(false);
    setDropdownId("");
    setSubDropdown("");
  };

  const handleDropdown = (id) => {
    if (dropdownId == id) {
      setDropdownId("");
    } else {
      setSubDropdown("");
      setDropdownId(id);
    }
  };

  const handleSubDropdown = (id) => {
    if (subDropdown == id) {
      setSubDropdown("");
    } else {
      setSubDropdown(id);
    }
  };

  const navBarTop = () => {
    if (window !== undefined) {
      let height = window.scrollY;
      setWindowHeight(height);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navBarTop);
    return () => {
      window.removeEventListener("scroll", navBarTop);
    };
  }, []);

  return (
    <header className={`header ${cls} ${windowHeight > 50 && "header-active"}`}>
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
                <div className={`nav__menu ${active && "nav__menu-active"}`}>
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
                    {navData.map(
                      ({ itm, url, id, dropdown, dropdown_itms }) => {
                        return dropdown ? (
                          <li
                            key={id}
                            className="nav__menu-item nav__menu-item--dropdown"
                          >
                            <Link
                              onClick={() => handleDropdown(id)}
                              // href={url}
                              href="URL:void(0)"
                              className={`nav__menu-link nav__menu-link--dropdown ${
                                dropdownId === id &&
                                "nav__menu-link--dropdown-active"
                              }`}
                            >
                              {itm}
                            </Link>
                            <ul
                              className={`nav__dropdown ${
                                dropdownId === id && "nav__dropdown-active"
                              }`}
                            >
                              {dropdown_itms?.map(
                                ({
                                  id,
                                  dp_itm,
                                  url,
                                  sbu_dropdown,
                                  sub_items,
                                }) => {
                                  return sbu_dropdown ? (
                                    <li
                                      key={id}
                                      className="nav__menu-link-child"
                                    >
                                      <Link
                                        onClick={() => handleSubDropdown(id)}
                                        className="nav__dropdown-item nav__menu-link--dropdown nav__menu-link-childr"
                                        href="URL:void(0)"
                                      >
                                        {dp_itm}
                                      </Link>
                                      <ul
                                        className={`nav__dropdown-child ${
                                          subDropdown === id &&
                                          "nav__dropdown-active"
                                        }`}
                                      >
                                        {sub_items?.map(
                                          ({ id, url, sub_itm }) => (
                                            <li key={id}>
                                              <Link
                                                className="nav__dropdown-item hide-nav"
                                                href={url}
                                                onClick={handleActive}
                                              >
                                                {sub_itm}
                                              </Link>
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </li>
                                  ) : (
                                    <li key={id}>
                                      <Link
                                        className="nav__dropdown-item hide-nav"
                                        href={url}
                                        onClick={handleActive}
                                      >
                                        {dp_itm}
                                      </Link>
                                    </li>
                                  );
                                }
                              )}
                            </ul>
                          </li>
                        ) : (
                          <li>
                            <Link></Link>
                          </li>
                        );
                      }
                    )}

                    {/* Sign In or Sign Up or Logout*/}
                    {user ? (
                      <>
                      </>
                    ) : (
                      <li className="nav__menu-item d-block d-md-none">
                        <Link href="/sign-in" className="cmn-button cmn-button--secondary">
                          Sign In/Sign Up
                        </Link>
                      </li>
                    )}
                  </ul>
                  <div className="social">
                    <Link href="/">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                    <Link href="/">
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                    <Link href="/">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                    <Link href="/">
                      <i className="fa-brands fa-square-instagram"></i>
                    </Link>
                  </div>
                </div>
                <div className="nav__uncollapsed">
                  <Link href="/cart" className="cart">
                    <i className="golftio-cart"></i>
                  </Link>
                  <div className="nav__uncollapsed-item d-none d-md-flex">
                    {user ? (
                      <HandleLogout />
                    ) : (
                      <Link href="/sign-in" className="cmn-button cmn-button--tertiary">
                        Sign In/Sign Up
                      </Link>
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
      <div className={`backdrop ${active && "backdrop-active"}`}></div>
    </header>
  );
};

export default NavBar;

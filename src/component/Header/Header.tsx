import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Home, Menu } from "react-feather";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop >= 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`main-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container-fluid bx-brd-box">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center w-100">
            <div className="menu-icon mr-3" onClick={toggleMenu}>
              <Menu />
            </div>
            <div id="logo">
              <Link href="/">
                <Image
                  width={459}
                  height={424}
                  src="/images/logo-light-dark.svg"
                  alt=""
                />
              </Link>
            </div>
            <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/aboutUsIndex">About</Link>
              </li>
              <li>
                <Link href="/listingIndex">Property</Link>
              </li>
              <li>
                <Link href="/blogIndex">Blog</Link>
              </li>
              <li>
                <Link href="/contactUsIndex">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="right-side w-100">
            <div className="show-reg-form">
              <a href="#">Sign In</a>
            </div>
            <div className="profile">
              <div className="row">
                <div className="col-4">
                  <span className="image-border">
                    <Image
                      src="/images/vedika.jpg"

                      alt=""
                      width={250}
                      height={250}
                    />
                  </span>
                </div>
                <div className="col-8">
                  <div className="header-user-name">Hi,vedika!</div>
                </div>
              </div>
            </div>
            <a href="#" className="add-listing">
              Add Listing
              <Home />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
function componentDidMount() {
  throw new Error("Function not implemented.");
}

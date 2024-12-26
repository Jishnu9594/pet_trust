import React, { useState, useEffect, Fragment } from "react";
import { Link, useLocation } from "react-router-dom";

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Fragment>
      <header>
        <div className="header-area header-transparent">
          <div className="main-header header-sticky">
            <div className="container-fluid">
              <div className="row align-items-center">
                {/* Logo */}
                <div className="col-xl-2 col-lg-2 col-md-2 col-6">
                  <div className="logo">
                    <Link to="/">
                      <img src="assets/img/logo/pettrustlogo" alt="Logo" />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-10 col-lg-10 col-md-10 col-6">
                  <div className="menu-main d-flex align-items-center justify-content-end">
                    {/* Main-menu */}
                    <div
                      className={`main-menu f-right d-none d-lg-block ${
                        menuOpen ? "open" : ""
                      }`}
                    >
                      <nav>
                        <ul id="navigation">
                          <li>
                            <Link to="/">Home</Link>
                          </li>
                          <li>
                            <Link to="/about">About</Link>
                          </li>
                          <li>
                            <Link to="/better-paws">Better Paws</Link>
                          </li>
                          <li>
                            <Link to="/services">Services</Link>
                          </li>
                          <li className="has-submenu">
                            <Link to="/blog">Blog</Link>
                          </li>
                          <li>
                            <Link to="/contact">Contact</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    {/* Call Button */}
                    <div className="header-right-btn f-right d-none d-lg-block ml-30">
                      <a href="tel:01654066456" className="header-btn">
                        +91 6235806115
                      </a>
                    </div>
                    {/* Mobile Menu Toggle */}
                    <div className="mobile-menu-toggle d-lg-none">
                      <button
                        onClick={toggleMenu}
                        className={`hamburger ${menuOpen ? "is-active" : ""}`}
                        aria-label="Menu Toggle"
                      >
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile Menu */}
            {menuOpen && (
              <div className="mobile_menu d-block d-lg-none">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/better-paws">Better paws</Link>
                  </li>
                  <li>
                    <Link to="/services">Services</Link>
                  </li>

                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>
    </Fragment>
  );
}

export default Menu;

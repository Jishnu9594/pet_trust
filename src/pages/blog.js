import React, { Fragment } from "react";
import Menu from "../menu";
import BlogSection from "./blogindex";
import { Link, useLocation } from "react-router-dom";

function Blog() {
  return (
    <Fragment>
      <>
        <Menu />
        <main>
          {/* Hero Area Start */}
          <div className="slider-area2 slider-height2 d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap text-center pt-50">
                    <h2>Blog</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Hero Area End */}
          {/*================Blog Area =================*/}
          <BlogSection />

          {/*================Blog Area =================*/}
        </main>
        <footer>
          {/* Footer Start*/}
          <div className="footer-area footer-padding">
            <div className="container">
              <div className="row d-flex justify-content-between">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                  <div className="single-footer-caption mb-50">
                    <div className="single-footer-caption mb-30">
                      {/* logo */}
                      <div className="footer-logo mb-25">
                        <a href="index.html">
                          <img
                            src="assets/img/logo/pettrustlogo"
                            alt="Logo"
                            className="logo-image"
                          />
                        </a>
                      </div>
                      <div className="footer-tittle">
                        <div className="footer-pera">
                          <p>Valuing Your Pet’s Health at Pet Trust Hospital</p>
                        </div>
                      </div>
                      {/* social */}
                      <div className="footer-social">
                        <a href="https://www.facebook.com/sai4ull">
                          <i className="fab fa-facebook-square" />
                        </a>
                        <a href="#">
                          <i className="fab fa-twitter-square" />
                        </a>
                        <a href="#">
                          <i className="fab fa-linkedin" />
                        </a>
                        <a href="#">
                          <i className="fab fa-pinterest-square" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-5">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Pet Trust Hospital</h4>
                      <ul>
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/about">About</Link>
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
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-7">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Services</h4>
                      <ul>
                        <li>
                          <a href="#">Pet Boarding</a>
                        </li>
                        <li>
                          <a href="#">Pet Treatment</a>
                        </li>
                        <li>
                          <a href="#">Vaccinations</a>
                        </li>
                        <li>
                          <a href="#">Department of Surgery</a>
                        </li>
                        <li>
                          <a href="#">Department of Veterinary Medicine</a>
                        </li>
                        <li>
                          <a href="#">
                            <li>
                              <a href="#">Department of Veterinary Medicine</a>
                            </li>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Get in Touch</h4>
                      <ul>
                        <li>
                          <a href="#">+91 6235806114</a>|
                          <a href="#">+91 6235806114</a>
                        </li>
                        <li>
                          <a href="#"> infopettrust@gmail.com</a>
                        </li>
                        <li>
                          <a href="#">
                            PET TRUST - Pet Hospital Kochi, Veterinary Hospital
                            Kochi, Pet Clinic Kochi, Veterinary Doctor Kochi
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* footer-bottom area */}
          <div className="footer-bottom-area">
            <div className="container">
              <div className="footer-border">
                <div className="row d-flex align-items-center">
                  <div className="col-xl-12 ">
                    <div className="footer-copy-right text-center">
                      <p>
                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                        Copyright © Pet Trust All rights reserved | This website
                        is made with{" "}
                        <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                        <a href="https://colorlib.com" target="_blank">
                          INNVOATE_X
                        </a>
                        {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer End*/}
        </footer>
        {/* Scroll Up */}
        <div id="back-top">
          <a title="Go to Top" href="#">
            {" "}
            <i className="fas fa-level-up-alt" />
          </a>
        </div>
      </>
    </Fragment>
  );
}

export default Blog;

import React, { Fragment } from "react";
import Menu from "../menu";
import ContactForm from "./contactform";
import BlogSection from "./blogindex";

function About() {
  return (
    <Fragment>
      <>
        <>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <title>Animal | Template </title>
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="manifest" href="site.webmanifest" />
          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="assets/img/favicon.ico"
          />
          {/* CSS here */}
          <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
          <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
          <link rel="stylesheet" href="assets/css/slicknav.css" />
          <link rel="stylesheet" href="assets/css/flaticon.css" />
          <link rel="stylesheet" href="assets/css/animate.min.css" />
          <link rel="stylesheet" href="assets/css/magnific-popup.css" />
          <link rel="stylesheet" href="assets/css/fontawesome-all.min.css" />
          <link rel="stylesheet" href="assets/css/themify-icons.css" />
          <link rel="stylesheet" href="assets/css/slick.css" />
          <link rel="stylesheet" href="assets/css/nice-select.css" />
          <link rel="stylesheet" href="assets/css/style.css" />
        </>

        <Menu />
        <main>
          {/* Hero Area Start */}
          <div className="slider-area2 slider-height2 d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="hero-cap text-center pt-50">
                    <h2>About Us</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Hero Area End */}
          {/* About Details Start */}
          <div className="about-details section-padding30">
            <div className="container">
              <div className="row">
                <div className="offset-xl-1 col-lg-8">
                  <div className="about-details-cap mb-50">
                    <h4>Our Mission</h4>
                    <p>
                      Consectetur adipiscing elit, sued do eiusmod tempor
                      ididunt udfgt labore et dolore magna aliqua. Quis ipsum
                      suspendisces gravida. Risus commodo viverra sebfd dho
                      eiusmod tempor maecenas accumsan lacus. Risus commodo
                      viverra sebfd dho eiusmod tempor maecenas accumsan lacus.
                    </p>
                    <p>
                      {" "}
                      Risus commodo viverra sebfd dho eiusmod tempor maecenas
                      accumsan lacus. Risus commodo viverra sebfd dho eiusmod
                      tempor maecenas accumsan.
                    </p>
                  </div>
                  <div className="about-details-cap mb-50">
                    <h4>Our Vision</h4>
                    <p>
                      Consectetur adipiscing elit, sued do eiusmod tempor
                      ididunt udfgt labore et dolore magna aliqua. Quis ipsum
                      suspendisces gravida. Risus commodo viverra sebfd dho
                      eiusmod tempor maecenas accumsan lacus. Risus commodo
                      viverra sebfd dho eiusmod tempor maecenas accumsan lacus.
                    </p>
                    <p>
                      {" "}
                      Risus commodo viverra sebfd dho eiusmod tempor maecenas
                      accumsan lacus. Risus commodo viverra sebfd dho eiusmod
                      tempor maecenas accumsan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* About Details End */}
          {/*? About Area Start*/}
          <div className="about-area fix">
            {/*Right Contents  */}
            <div className="about-img">
              <div className="info-man text-center">
                <div className="head-cap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="28px"
                    height="39px"
                  >
                    <path
                      fillRule="evenodd"
                      fill="rgb(255, 255, 255)"
                      d="M24.000,19.000 C21.791,19.000 20.000,17.209 20.000,15.000 C20.000,12.790 21.791,11.000 24.000,11.000 C26.209,11.000 28.000,12.790 28.000,15.000 C28.000,17.209 26.209,19.000 24.000,19.000 ZM24.000,8.000 C21.791,8.000 20.000,6.209 20.000,4.000 C20.000,1.790 21.791,-0.001 24.000,-0.001 C26.209,-0.001 28.000,1.790 28.000,4.000 C28.000,6.209 26.209,8.000 24.000,8.000 ZM14.000,38.999 C11.791,38.999 10.000,37.209 10.000,35.000 C10.000,32.791 11.791,31.000 14.000,31.000 C16.209,31.000 18.000,32.791 18.000,35.000 C18.000,37.209 16.209,38.999 14.000,38.999 ZM14.000,29.000 C11.791,29.000 10.000,27.209 10.000,25.000 C10.000,22.791 11.791,21.000 14.000,21.000 C16.209,21.000 18.000,22.791 18.000,25.000 C18.000,27.209 16.209,29.000 14.000,29.000 ZM14.000,19.000 C11.791,19.000 10.000,17.209 10.000,15.000 C10.000,12.790 11.791,11.000 14.000,11.000 C16.209,11.000 18.000,12.790 18.000,15.000 C18.000,17.209 16.209,19.000 14.000,19.000 ZM14.000,8.000 C11.791,8.000 10.000,6.209 10.000,4.000 C10.000,1.790 11.791,-0.001 14.000,-0.001 C16.209,-0.001 18.000,1.790 18.000,4.000 C18.000,6.209 16.209,8.000 14.000,8.000 ZM4.000,29.000 C1.791,29.000 -0.000,27.209 -0.000,25.000 C-0.000,22.791 1.791,21.000 4.000,21.000 C6.209,21.000 8.000,22.791 8.000,25.000 C8.000,27.209 6.209,29.000 4.000,29.000 ZM4.000,19.000 C1.791,19.000 -0.000,17.209 -0.000,15.000 C-0.000,12.790 1.791,11.000 4.000,11.000 C6.209,11.000 8.000,12.790 8.000,15.000 C8.000,17.209 6.209,19.000 4.000,19.000 ZM4.000,8.000 C1.791,8.000 -0.000,6.209 -0.000,4.000 C-0.000,1.790 1.791,-0.001 4.000,-0.001 C6.209,-0.001 8.000,1.790 8.000,4.000 C8.000,6.209 6.209,8.000 4.000,8.000 ZM24.000,21.000 C26.209,21.000 28.000,22.791 28.000,25.000 C28.000,27.209 26.209,29.000 24.000,29.000 C21.791,29.000 20.000,27.209 20.000,25.000 C20.000,22.791 21.791,21.000 24.000,21.000 Z"
                    />
                  </svg>
                  <h3>354</h3>
                </div>
                <p>
                  Success
                  <br />
                  Treatment
                </p>
              </div>
              <div className="info-man info-man2 text-center">
                <div className="head-cap">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="28px"
                    height="39px"
                  >
                    <path
                      fillRule="evenodd"
                      fill="rgb(255, 255, 255)"
                      d="M24.000,19.000 C21.791,19.000 20.000,17.209 20.000,15.000 C20.000,12.790 21.791,11.000 24.000,11.000 C26.209,11.000 28.000,12.790 28.000,15.000 C28.000,17.209 26.209,19.000 24.000,19.000 ZM24.000,8.000 C21.791,8.000 20.000,6.209 20.000,4.000 C20.000,1.790 21.791,-0.001 24.000,-0.001 C26.209,-0.001 28.000,1.790 28.000,4.000 C28.000,6.209 26.209,8.000 24.000,8.000 ZM14.000,38.999 C11.791,38.999 10.000,37.209 10.000,35.000 C10.000,32.791 11.791,31.000 14.000,31.000 C16.209,31.000 18.000,32.791 18.000,35.000 C18.000,37.209 16.209,38.999 14.000,38.999 ZM14.000,29.000 C11.791,29.000 10.000,27.209 10.000,25.000 C10.000,22.791 11.791,21.000 14.000,21.000 C16.209,21.000 18.000,22.791 18.000,25.000 C18.000,27.209 16.209,29.000 14.000,29.000 ZM14.000,19.000 C11.791,19.000 10.000,17.209 10.000,15.000 C10.000,12.790 11.791,11.000 14.000,11.000 C16.209,11.000 18.000,12.790 18.000,15.000 C18.000,17.209 16.209,19.000 14.000,19.000 ZM14.000,8.000 C11.791,8.000 10.000,6.209 10.000,4.000 C10.000,1.790 11.791,-0.001 14.000,-0.001 C16.209,-0.001 18.000,1.790 18.000,4.000 C18.000,6.209 16.209,8.000 14.000,8.000 ZM4.000,29.000 C1.791,29.000 -0.000,27.209 -0.000,25.000 C-0.000,22.791 1.791,21.000 4.000,21.000 C6.209,21.000 8.000,22.791 8.000,25.000 C8.000,27.209 6.209,29.000 4.000,29.000 ZM4.000,19.000 C1.791,19.000 -0.000,17.209 -0.000,15.000 C-0.000,12.790 1.791,11.000 4.000,11.000 C6.209,11.000 8.000,12.790 8.000,15.000 C8.000,17.209 6.209,19.000 4.000,19.000 ZM4.000,8.000 C1.791,8.000 -0.000,6.209 -0.000,4.000 C-0.000,1.790 1.791,-0.001 4.000,-0.001 C6.209,-0.001 8.000,1.790 8.000,4.000 C8.000,6.209 6.209,8.000 4.000,8.000 ZM24.000,21.000 C26.209,21.000 28.000,22.791 28.000,25.000 C28.000,27.209 26.209,29.000 24.000,29.000 C21.791,29.000 20.000,27.209 20.000,25.000 C20.000,22.791 21.791,21.000 24.000,21.000 Z"
                    />
                  </svg>
                  <h3>354</h3>
                </div>
                <p>
                  Success
                  <br />
                  Treatment
                </p>
              </div>
            </div>
            {/* left Contents */}
            <div className="about-details">
              <div className="right-caption">
                {/* Section Tittle */}
                <div className="section-tittle mb-50">
                  <h2>
                    We are commited for
                    <br /> better service
                  </h2>
                </div>
                <div className="about-more">
                  <p className="pera-top">
                    Mollit anim laborum duis adseu dolor iuyn voluptcate velit
                    ess <br />
                    cillum dolore egru lofrre dsu.
                  </p>
                  <p className="mb-65 pera-bottom">
                    Mollit anim laborum.Dvcuis aute serunt iruxvfg dhjkolohr
                    indd re voluptate velit esscillumlore eu quife nrulla
                    parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute
                    iruxvfg dhjinulpadeserunt moll.
                  </p>
                  <a href="#" className="btn">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* About Area End*/}
          {/*? Team Start */}
          <div className="team-area section-padding30">
            <div className="container">
              <div className="row justify-content-sm-center">
                <div className="cl-xl-7 col-lg-8 col-md-10">
                  {/* Section Tittle */}
                  <div className="section-tittle text-center mb-70">
                    <span>Our Professional members </span>
                    <h2>Our Team Mambers</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                {/* single Tem */}
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                  <div className="single-team mb-30">
                    <div className="team-img">
                      <img src="assets/img/gallery/team1.png" alt="" />
                    </div>
                    <div className="team-caption">
                      <span>Mike Janathon</span>
                      <h3>
                        <a href="#">Doctor</a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                  <div className="single-team mb-30">
                    <div className="team-img">
                      <img src="assets/img/gallery/team2.png" alt="" />
                    </div>
                    <div className="team-caption">
                      <span>Mike J Smith</span>
                      <h3>
                        <a href="#">Doctor</a>
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-">
                  <div className="single-team mb-30">
                    <div className="team-img">
                      <img src="assets/img/gallery/team3.png" alt="" />
                    </div>
                    <div className="team-caption">
                      <span>Pule W Smith</span>
                      <h3>
                        <a href="#">Doctor</a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Team End */}
          {/*? Contact form Start */}
          <ContactForm />

          {/* Contact form End */}
          {/*? Blog start */}
          <BlogSection />
          {/* Blog End */}
          {/*? contact-animal-owner Start */}
          <div
            className="contact-animal-owner section-bg"
            data-background="assets/img/gallery/section_bg04.png"
            style={{
              backgroundImage: 'url("assets/img/gallery/section_bg04.png")',
            }}
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="contact_text text-center">
                    <div className="section_title text-center">
                      <h3>Any time you can call us!</h3>
                      <p>
                        Because we know that even the best technology is only as
                        good as the people behind it. 24/7 tech support.
                      </p>
                    </div>
                    <div className="contact_btn d-flex align-items-center justify-content-center">
                      <a href="contact.html" className="btn white-btn">
                        Contact Us
                      </a>
                      <p>
                        Or<a href="#"> +880 4664 216</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* contact-animal-owner End */}
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
                          <img src="assets/img/logo/logo2_footer.png" alt="" />
                        </a>
                      </div>
                      <div className="footer-tittle">
                        <div className="footer-pera">
                          <p>
                            Lorem ipsum dolor sit amet, adipiscing elit, sed do
                            eiusmod tempor elit.{" "}
                          </p>
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
                      <h4>Company</h4>
                      <ul>
                        <li>
                          <a href="index.html">Home</a>
                        </li>
                        <li>
                          <a href="about.html">About Us</a>
                        </li>
                        <li>
                          <a href="single-blog.html">Services</a>
                        </li>
                        <li>
                          <a href="#">Cases</a>
                        </li>
                        <li>
                          <a href="contact.html"> Contact Us</a>
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
                          <a href="#">Commercial Cleaning</a>
                        </li>
                        <li>
                          <a href="#">Office Cleaning</a>
                        </li>
                        <li>
                          <a href="#">Building Cleaning</a>
                        </li>
                        <li>
                          <a href="#">Floor Cleaning</a>
                        </li>
                        <li>
                          <a href="#">Apartment Cleaning</a>
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
                          <a href="#">152-515-6565</a>
                        </li>
                        <li>
                          <a href="#"> Demomail@gmail.com</a>
                        </li>
                        <li>
                          <a href="#">New Orleans, USA</a>
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
                        Copyright © All rights reserved | This template is made
                        with <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                        <a href="https://colorlib.com" target="_blank">
                          Colorlib
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

        <script src="./assets/js/vendor/modernizr-3.5.0.min.js"></script>
        <script src="./assets/js/vendor/jquery-1.12.4.min.js"></script>
        <script src="./assets/js/popper.min.js"></script>
        <script src="./assets/js/bootstrap.min.js"></script>

        <script src="./assets/js/jquery.slicknav.min.js"></script>

        <script src="./assets/js/owl.carousel.min.js"></script>
        <script src="./assets/js/slick.min.js"></script>

        <script src="./assets/js/wow.min.js"></script>
        <script src="./assets/js/animated.headline.js"></script>
        <script src="./assets/js/jquery.magnific-popup.js"></script>

        <script src="./assets/js/jquery.nice-select.min.js"></script>
        <script src="./assets/js/jquery.sticky.js"></script>

        <script src="./assets/js/contact.js"></script>
        <script src="./assets/js/jquery.form.js"></script>
        <script src="./assets/js/jquery.validate.min.js"></script>
        <script src="./assets/js/mail-script.js"></script>
        <script src="./assets/js/jquery.ajaxchimp.min.js"></script>

        <script src="./assets/js/plugins.js"></script>
        <script src="./assets/js/main.js"></script>
      </>
    </Fragment>
  );
}

export default About;

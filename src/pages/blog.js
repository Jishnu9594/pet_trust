import React, { Fragment } from "react";
import Menu from "../menu";
import BlogSection from "./blogindex";
import { Link, useLocation } from "react-router-dom";
import Footer from "./footer";

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
        <Footer />
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

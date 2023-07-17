import ProtoTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import OffCanvas from "./Offcanvas";

function HeaderV2({ className }) {
  const [drawer, setDrawer] = useState(false);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <>
      <OffCanvas isOpen={drawer} close={() => setDrawer(false)} />
      <header
        data-scroll-index="0"
        className={`header-area header-4-area ${className ? className : ""}`}
      >
        <div className="container custom-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-items">
                <div className="header-logo">
                  <Link to="/">
                    <img src="assets/images/logo.png" alt="" />
                  </Link>
                </div>
                <div className={`header-menu ${menuIsOpen ? "active" : ""}`}>
                  <div className="main_menu menu_two d-flex justify-content-lg-between justify-content-center align-items-center">
                    <nav>
                      <ul>
                        <li>
                          <Link className="active" to="/">
                            Home <i className="fa fa-angle-down"></i>
                          </Link>
                          <ul className="sub_menu">
                            <li>
                              <Link to="/">Home 1</Link>
                            </li>
                            <li>
                              <Link to="/home-2">Home 2</Link>
                            </li>
                            <li>
                              <Link to="/home-3">Home 3</Link>
                            </li>
                            <li>
                              <Link to="/home-4">Home 4</Link>
                            </li>
                            <li>
                              <Link to="/home-5">Home 5</Link>
                            </li>
                            <li>
                              <Link to="/home-6">Home 6</Link>
                            </li>
                            <li>
                              <Link to="/home-7">Home 7</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/about"> About</Link>
                        </li>
                        <li>
                          <Link to="/contact">
                            Portfolio <i className="fa fa-angle-down"></i>
                          </Link>
                          <ul className="sub_menu">
                            <li>
                              <Link to="/portfolio-1">Portfolio 1</Link>
                            </li>
                            <li>
                              <Link to="/portfolio-2">Portfolio 2</Link>
                            </li>
                            <li>
                              <Link to="/portfolio-3">Portfolio 3</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/blog">
                            Pages<i className="fa fa-angle-down"></i>
                          </Link>
                          <ul className="sub_menu">
                            <li>
                              <Link to="/blog">Blog</Link>
                            </li>
                            <li>
                              <Link to="/blog-details">Blog Details</Link>
                            </li>
                            <li>
                              <Link to="/project-details">Project Details</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/contact"> Contact</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div
                    className="toggle-btn  d-none d-lg-block"
                    onClick={() => setMenuIsOpen(!menuIsOpen)}
                  >
                    {className ? (
                      <img src="assets/images/bars.svg" alt="" />
                    ) : (
                      <img src="assets/images/bars-2.png" alt="" />
                    )}
                  </div>
                  <div
                    className="canvas_open d-block d-lg-none"
                    onClick={() => setDrawer(!drawer)}
                  >
                    <a>
                      {className === "header-7-area" ? (
                        <img src="assets/images/bars.svg" alt="" />
                      ) : (
                        <img src="assets/images/bars-2.png" alt="" />
                      )}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

HeaderV2.propTypes = {
  className: ProtoTypes.string,
};

export default HeaderV2;

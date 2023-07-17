import ProtoTypes from "prop-types";
import { useState } from "react";
import OffCanvas from "./Offcanvas";
import { Link } from "react-router-dom";
import Topbar from "./Topbar";

function Header({ className, topbar, togglbtnClass, toggleBtnImg, logo }) {
  const [offCanvas, setOffCanvas] = useState(false);
  return (
    <>
      <OffCanvas isOpen={offCanvas} close={() => setOffCanvas(false)} />
      <header
        data-scroll-index="0"
        className={`header-area ${className ? className : ""}`}
      >
        {topbar && <Topbar />}
        <div className="container custom-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header-items">
                <div className="header-logo">
                  <Link to="/">
                    <img src={logo ? logo : "assets/images/logo.png"} alt="" />
                  </Link>
                </div>
                <div className="header-menu">
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
                          <a>
                            Portfolio <i className="fa fa-angle-down"></i>
                          </a>
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
                          <a href="#">
                            Pages<i className="fa fa-angle-down"></i>
                          </a>
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
                    className={`toggle-btn ${
                      togglbtnClass ? togglbtnClass : ""
                    }`}
                    onClick={() => setOffCanvas(!offCanvas)}
                  >
                    <div className="canvas_open ">
                      <a>
                        <img
                          src={
                            toggleBtnImg
                              ? toggleBtnImg
                              : "assets/images/bars.svg"
                          }
                          alt=""
                        />
                      </a>
                    </div>
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
Header.propTypes = {
  className: ProtoTypes.string,
  topbar: ProtoTypes.bool,
  togglbtnClass: ProtoTypes.string,
  toggleBtnImg: ProtoTypes.string,
  logo: ProtoTypes.string,
};

export default Header;

import ProtoType from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

function OffCanvas({ isOpen, close }) {
  const [subNav, setSubNav] = useState(false);
  return (
    <>
      <div className={`off_canvars_overlay ${isOpen ? "active" : ""}`}></div>
      <div className="offcanvas_menu">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div
                className={`offcanvas_menu_wrapper ${isOpen ? "active" : ""}`}
              >
                <div className="canvas_close" onClick={close}>
                  <a>
                    <i className="fa fa-times"></i>
                  </a>
                </div>
                <div className="header-social">
                  <ul className="text-left">
                    <li>
                      <a href="#">facebook</a>
                    </li>
                    <li>
                      <a href="#">Twitter</a>
                    </li>
                    <li>
                      <a href="#">Skype</a>
                    </li>
                  </ul>
                </div>
                <div id="menu" className="text-left ">
                  <ul className="offcanvas_main_menu">
                    <li
                      className={`menu-item-has-children ${
                        subNav === "home" ? "active menu-open" : ""
                      }`}
                      onClick={() =>
                        setSubNav(subNav === "home" ? false : "home")
                      }
                    >
                      <span className="menu-expand">
                        <i className="fa fa-angle-down"></i>
                      </span>
                      <a>Home</a>
                      <ul
                        className="sub-menu"
                        style={{
                          display: subNav === "home" ? "block" : "none",
                        }}
                      >
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
                    <li className="menu-item-has-children">
                      <Link to="/about"> about</Link>
                    </li>
                    <li
                      className={`menu-item-has-children ${
                        subNav === "portfolio" ? "active menu-open" : ""
                      }`}
                      onClick={() =>
                        setSubNav(subNav === "portfolio" ? false : "portfolio")
                      }
                    >
                      <span className="menu-expand">
                        <i className="fa fa-angle-down"></i>
                      </span>
                      <a> portfolio</a>
                      <ul
                        className="sub-menu"
                        style={{
                          display: subNav === "portfolio" ? "block" : "none",
                        }}
                      >
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
                    <li
                      className={`menu-item-has-children ${
                        subNav === "pages" ? "active menu-open" : ""
                      }`}
                      onClick={() =>
                        setSubNav(subNav === "pages" ? false : "pages")
                      }
                    >
                      <span className="menu-expand">
                        <i className="fa fa-angle-down"></i>
                      </span>
                      <a>Pages</a>
                      <ul
                        className="sub-menu"
                        style={{
                          display: subNav === "pages" ? "block" : "none",
                        }}
                      >
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
                    <li className="menu-item-has-children">
                      <Link to="/contact"> Contact</Link>
                    </li>
                  </ul>
                </div>
                <div className="offcanvas_footer">
                  <div className="logo text-center mb-30">
                    <Link to="/">
                      <img src="assets/images/logo.png" alt="" />
                    </Link>
                  </div>
                  <p>
                    I’m Michal Škvarenina, a multi-disciplinary designer
                    currently working at Wild and as a freelance designer.
                  </p>
                  <ul>
                    <li>
                      <i className="fa fa-phone"></i> +212 34 45 45 98
                    </li>
                    <li>
                      <i className="fa fa-home"></i> Angle Bd Abdelmoumen & rue
                      soumaya, Résidence
                    </li>
                    <li>
                      <i className="fa fa-envelope"></i> hello@example.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

OffCanvas.propTypes = {
  isOpen: ProtoType.bool,
  close: ProtoType.func,
};

export default OffCanvas;

import { Link } from "react-router-dom";

function FooterV2() {
  return (
    <footer className="footer-2-area">
      <div className="container custom-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-top footer-top-10 d-block d-sm-flex  justify-content-between align-items-center">
              <div className="footer-logo">
                <Link to="/">
                  <img src="assets/images/logo-2.png" alt="" />
                </Link>
              </div>
              <div className="footer-social">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-item">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="footer-about mt-30">
                <h4 className="title">Company</h4>
                <p>
                  DNP Installations can carry out all maintenance on phone and
                  data and phone points in DNP Installations can carry out all
                  maintenance on phone and data and phone.
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-list footer-list-10 mt-30 ml-95">
                <h4 className="title">Quick links</h4>
                <ul>
                  <li>
                    <Link to="#">Creative</Link>
                  </li>
                  <li>
                    <Link to="#">General</Link>
                  </li>
                  <li>
                    <Link to="#">Insights</Link>
                  </li>
                  <li>
                    <Link to="#">Tech</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-list footer-list-10 mt-30">
                <h4 className="title">Categories</h4>
                <ul>
                  <li>
                    <Link to="#">About us</Link>
                  </li>
                  <li>
                    <Link to="#">Terms and conditions</Link>
                  </li>
                  <li>
                    <Link to="#">Privacy policy</Link>
                  </li>
                  <li>
                    <Link to="#">News</Link>
                  </li>
                  <li>
                    <Link to="#">Contact us</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-info footer-info-10 mt-30">
                <h3 className="title">Categories</h3>
                <ul>
                  <li>
                    <i className="fa fa-map-marker"></i> 445 Main Street, New
                    York CA-12325, USA{" "}
                  </li>
                  <li>
                    <i className="fa fa-phone"></i> +00 125 456 888{" "}
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i> contact@aball.com{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="footer-copyright-2">
              <p>
                Copyright{" "}
                <a href="https://themeforest.net/user/quomodotheme">
                  quomodotheme
                </a>{" "}
                2021
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterV2;

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-area sm-pt-20">
      <div className="container custom-container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="widget about-widget">
              <h3 className="widget-title">About Oifolio</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatum beatae vitae omnis, commodi eum iusto sit magnam.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo,
                necessitatibus. Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="widget list-widget">
              <h3 className="widget-title">Resources</h3>
              <ul>
                <li>
                  <Link to="#">Ui kit</Link>
                </li>
                <li>
                  <Link to="#">Creabik</Link>
                </li>
                <li>
                  <Link to="#">Themeforest</Link>
                </li>
                <li>
                  <Link to="#">Media kit</Link>
                </li>
                <li>
                  <Link to="#">Affiliate</Link>
                </li>
                <li>
                  <Link to="#">partner</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="widget list-widget">
              <h3 className="widget-title">Company</h3>
              <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="#">Our customers</Link>
                </li>
                <li>
                  <Link to="#">Contact us</Link>
                </li>
                <li>
                  <Link to="#">Terms</Link>
                </li>
                <li>
                  <Link to="#">Privacy</Link>
                </li>
                <li>
                  <Link to="#">Cookies</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="widget gallery-widget">
              <h3 className="widget-title">My Gallery</h3>
              <ul>
                <li>
                  <Link to="#">
                    <img src="assets/images/gallery-1.jpg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img src="assets/images/gallery-2.jpg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img src="assets/images/gallery-3.jpg" alt="" />
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to="#">
                    <img src="assets/images/gallery-4.jpg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img src="assets/images/gallery-5.jpg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img src="assets/images/gallery-6.jpg" alt="" />
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to="#">
                    <img src="assets/images/gallery-7.jpg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img src="assets/images/gallery-8.jpg" alt="" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <img src="assets/images/gallery-9.jpg" alt="" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container custom-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright-items d-block d-md-flex align-items-center justify-content-between">
                <div className="footer-logo">
                  <a href="#">
                    <img src="assets/images/logo-2.png" alt="logo" />
                  </a>
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
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-youtube-play"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-copyright-text">
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
        </div>
      </div>
    </footer>
  );
}

export default Footer;

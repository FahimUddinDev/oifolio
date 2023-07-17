import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";

function Pricing({ className }) {
  return (
    <section className={`pricing-area ${className ? className : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <h3 className="title">Our Pricing</h3>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="pricing-item mb-30">
              <div className="pricing">
                <span>Starter</span>
                <sub className="title">
                  <sup>$</sup>99
                </sub>
                <p>
                  Get the current deal without any risk and additional fees.
                </p>
              </div>
              <div className="pricing-list">
                <ul>
                  <li>
                    <div className="icon">
                      <img src="assets/images/icon/pricing-icon-1.svg" alt="" />
                    </div>{" "}
                    WPBakery Page Builder
                  </li>
                  <li>
                    <div className="icon">
                      <img src="assets/images/icon/pricing-icon-1.svg" alt="" />
                    </div>{" "}
                    Advanced Custom Fileds Pro
                  </li>
                  <li>
                    <div className="icon">
                      <img src="assets/images/icon/pricing-icon-1.svg" alt="" />
                    </div>{" "}
                    Slider Revolution
                  </li>
                  <li>
                    <div className="icon">
                      <img src="assets/images/icon/pricing-icon-2.svg" alt="" />
                    </div>{" "}
                    Unlimited domains
                  </li>
                  <li>
                    <div className="icon">
                      <img src="assets/images/icon/pricing-icon-2.svg" alt="" />
                    </div>{" "}
                    6 months premium support
                  </li>
                  <li>
                    <div className="icon">
                      <img src="assets/images/icon/pricing-icon-2.svg" alt="" />
                    </div>{" "}
                    Custom Design & Features
                  </li>
                  <li>
                    <div className="icon">
                      <img src="assets/images/icon/pricing-icon-2.svg" alt="" />
                    </div>{" "}
                    Lifetime updates
                  </li>
                </ul>
              </div>
              <div className="pricing-btn">
                <Link to="#">Start 14 Days Free Trial</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="pricing-item item-2 mb-30">
              <div className="pricing">
                <span>Team</span>
                <sub className="title">
                  <sup>$</sup>370
                </sub>
                <p>
                  Get the current deal without any risk and additional fees.
                </p>
              </div>
              <div className="pricing-list">
                <ul>
                  <li>
                    <div className="icon">
                      <img src="assets/images/icon/pricing-icon-1.svg" alt="" />
                    </div>{" "}
                    WPBakery Page Builder
                  </li>
                  <li>
                    <div className="icon">
                      <img src="assets/images/icon/pricing-icon-1.svg" alt="" />
                    </div>{" "}
                    Advanced Custom Fileds Pro
                  </li>
                  <li>
                    <div className="icon">
                      <img src="assets/images/icon/pricing-icon-1.svg" alt="" />
                    </div>{" "}
                    Slider Revolution
                  </li>
                  <li>
                    <div className="icon">
                      <img src="assets/images/icon/pricing-icon-2.svg" alt="" />
                    </div>{" "}
                    Unlimited domains
                  </li>
                  <li>
                    <div className="icon">
                      <img src="assets/images/icon/pricing-icon-2.svg" alt="" />
                    </div>{" "}
                    6 months premium support
                  </li>
                  <li>
                    <div className="icon">
                      <img src="assets/images/icon/pricing-icon-2.svg" alt="" />
                    </div>{" "}
                    Custom Design & Features
                  </li>
                  <li>
                    <div className="icon">
                      <img src="assets/images/icon/pricing-icon-2.svg" alt="" />
                    </div>{" "}
                    Lifetime updates
                  </li>
                </ul>
              </div>
              <div className="pricing-btn">
                <Link to="#">Start 14 Days Free Trial</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Pricing.propTypes = {
  className: ProtoTypes.string,
};
export default Pricing;

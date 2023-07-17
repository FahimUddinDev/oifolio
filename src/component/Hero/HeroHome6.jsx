import { Link } from "react-router-dom";

function HeroHome6() {
  return (
    <section className="hero-area hero-style-6 d-flex align-items-center">
      <div className="container custom-container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="hero-content">
              <h1
                className="title animated wow fadeInLeft"
                data-wow-duration="1500ms"
                data-wow-delay="300ms"
              >
                Christopher Felami.
              </h1>
              <Link
                className=" animated wow fadeInRight"
                data-wow-duration="1500ms"
                data-wow-delay="500ms"
                to="#"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="col-lg-5">
            <div
              className="hero-thumb-6 animated wow fadeIn"
              data-wow-duration="1500ms"
              data-wow-delay="900ms"
            >
              <img src="assets/images/hero-thumb-7.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome6;

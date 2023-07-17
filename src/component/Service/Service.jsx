import { Link } from "react-router-dom";

function Service() {
  return (
    <section className="services-area">
      <div className="container custom-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h3 className="title">My Services</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div
              className="services-item mb-30 animated wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="300ms"
            >
              <div className="services-thumb">
                <img src="assets/images/services-1.png" alt="services" />
                <Link to="#">
                  <img src="assets/images/icon/icon-1.png" alt="" /> UI DESIGN
                </Link>
              </div>
              <div className="services-content">
                <p>
                  I’m Michal Škvarenina, a multi-disciplinary designer currently
                  working at Wild and as a freelance designer.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="services-item mb-30 animated wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="500ms"
            >
              <div className="services-thumb">
                <img src="assets/images/services-2.png" alt="services" />
                <Link to="#">
                  <img src="assets/images/icon/icon-2.png" alt="" /> WEB DESIGN
                </Link>
              </div>
              <div className="services-content">
                <p>
                  I’m Michal Škvarenina, a multi-disciplinary designer currently
                  working at Wild and as a freelance designer.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="services-item mb-30 animated wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="700ms"
            >
              <div className="services-thumb">
                <img src="assets/images/services-3.png" alt="services" />
                <Link to="#">
                  <img src="assets/images/icon/icon-3.png" alt="" /> UI DESIGN
                </Link>
              </div>
              <div className="services-content">
                <p>
                  I’m Michal Škvarenina, a multi-disciplinary designer currently
                  working at Wild and as a freelance designer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;

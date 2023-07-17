import { Link } from "react-router-dom";

function HeroHome4() {
  return (
    <section className="hero-4-area d-flex align-items-center">
      <div className="bg-image hero-bg"></div>
      <div className="container custom-container">
        <div className="row">
          <div className="col-lg-7">
            <div className="hero-content">
              <h1
                className="title animated wow fadeInLeft"
                data-wow-duration="1500ms"
                data-wow-delay="300ms"
              >
                Simple is the leading healthcare startup.
              </h1>
              <p
                className=" animated wow flipInX"
                data-wow-duration="1500ms"
                data-wow-delay="500ms"
              >
                I’m Michal Škvarenina, a multi-disciplinary designer currently
                working at Wild and as a freelance designer. I specialize in
                building digital experiences and creating brands. You can find
                me
              </p>
              <Link
                className=" animated wow fadeInRight"
                data-wow-duration="1500ms"
                data-wow-delay="700ms"
                to="#"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroHome4;

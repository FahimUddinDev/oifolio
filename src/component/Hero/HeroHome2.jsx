import Scroll from "../GoToTop/Scroll";

function HeroHome2() {
  return (
    <section className="hero-area hero-2-area d-flex align-items-center">
      <div className="bg-image hero-bg"></div>
      <div className="container custom-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="hero-content">
              <h1 className="title">Christopher Felami.</h1>
              <a href="#">Get Started</a>
            </div>
          </div>
        </div>
      </div>
      <Scroll />
    </section>
  );
}

export default HeroHome2;

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ImageSlider from "../ImagePopup/imageSlider";
import { useState } from "react";

function Work() {
  const [activeModal, setActiveModal] = useState(false);
  return (
    <section data-scroll-index="1" className="work-area">
      <div className="container  custom-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h3 className="title">My Works</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid p-0">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 6, 900: 6 }}>
          <Masonry gutter="30px">
            <div className="portfolio-item">
              <div className="item mt-20">
                <a className="image-popup" onClick={() => setActiveModal(1)}>
                  <img
                    src="assets/images/portfolio/portfolio-1.jpg"
                    alt="portfolio"
                  />
                  <div className="item-overlay">
                    <h4 className="title">
                      Fast matching with content delivery.
                    </h4>
                  </div>
                </a>
              </div>
            </div>

            <div className="portfolio-item">
              <div className="item mt-120">
                <a className="image-popup" onClick={() => setActiveModal(3)}>
                  <img
                    src="assets/images/portfolio/portfolio-3.jpg"
                    alt="portfolio"
                  />
                  <div className="item-overlay">
                    <h4 className="title">
                      Fast matching with content delivery.
                    </h4>
                  </div>
                </a>
              </div>
            </div>

            <div className="portfolio-item">
              <div className="item mt-20">
                <a className="image-popup" onClick={() => setActiveModal(5)}>
                  <img
                    src="assets/images/portfolio/portfolio-5.jpg"
                    alt="portfolio"
                  />
                  <div className="item-overlay">
                    <h4 className="title">
                      Fast matching with content delivery.
                    </h4>
                  </div>
                </a>
              </div>
            </div>

            <div className="portfolio-item">
              <div className="item mt-90">
                <a className="image-popup" onClick={() => setActiveModal(7)}>
                  <img
                    src="assets/images/portfolio/portfolio-7.jpg"
                    alt="portfolio"
                  />
                  <div className="item-overlay">
                    <h4 className="title">
                      Fast matching with content delivery.
                    </h4>
                  </div>
                </a>
              </div>
            </div>

            <div className="portfolio-item">
              <div className="item mt-130">
                <a className="image-popup" onClick={() => setActiveModal(9)}>
                  <img
                    src="assets/images/portfolio/portfolio-9.jpg"
                    alt="portfolio"
                  />
                  <div className="item-overlay">
                    <h4 className="title">
                      Fast matching with content delivery.
                    </h4>
                  </div>
                </a>
              </div>
            </div>

            <div className="portfolio-item">
              <div className="item mt-20">
                <a className="image-popup" onClick={() => setActiveModal(11)}>
                  <img
                    src="assets/images/portfolio/portfolio-11.jpg"
                    alt="portfolio"
                  />
                  <div className="item-overlay">
                    <h4 className="title">
                      Fast matching with content delivery.
                    </h4>
                  </div>
                </a>
              </div>
            </div>

            <div className="portfolio-item">
              <div className="item">
                <a className="image-popup" onClick={() => setActiveModal(2)}>
                  <img
                    src="assets/images/portfolio/portfolio-2.jpg"
                    alt="portfolio"
                  />
                  <div className="item-overlay">
                    <h4 className="title">
                      Fast matching with content delivery.
                    </h4>
                  </div>
                </a>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="item ">
                <a className="image-popup" onClick={() => setActiveModal(12)}>
                  <img
                    src="assets/images/portfolio/portfolio-12.jpg"
                    alt="portfolio"
                  />
                  <div className="item-overlay">
                    <h4 className="title">
                      Fast matching with content delivery.
                    </h4>
                  </div>
                </a>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="item">
                <a className="image-popup" onClick={() => setActiveModal(6)}>
                  <img
                    src="assets/images/portfolio/portfolio-6.jpg"
                    alt="portfolio"
                  />
                  <div className="item-overlay">
                    <h4 className="title">
                      Fast matching with content delivery.
                    </h4>
                  </div>
                </a>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="item ">
                <a className="image-popup" onClick={() => setActiveModal(8)}>
                  <img
                    src="assets/images/portfolio/portfolio-8.jpg"
                    alt="portfolio"
                  />
                  <div className="item-overlay">
                    <h4 className="title">
                      Fast matching with content delivery.
                    </h4>
                  </div>
                </a>
              </div>
            </div>
            <div className="portfolio-item">
              <div className="item">
                <a className="image-popup" onClick={() => setActiveModal(4)}>
                  <img
                    src="assets/images/portfolio/portfolio-4.jpg"
                    alt="portfolio"
                  />
                  <div className="item-overlay">
                    <h4 className="title">
                      Fast matching with content delivery.
                    </h4>
                  </div>
                </a>
              </div>
            </div>

            <div className="portfolio-item">
              <div className="item">
                <a className="image-popup" onClick={() => setActiveModal(10)}>
                  <img
                    src="assets/images/portfolio/portfolio-10.jpg"
                    alt="portfolio"
                  />
                  <div className="item-overlay">
                    <h4 className="title">
                      Fast matching with content delivery.
                    </h4>
                  </div>
                </a>
              </div>
            </div>
          </Masonry>
        </ResponsiveMasonry>
      </div>
      <ImageSlider
        images={[
          "assets/images/portfolio/portfolio-1.jpg",
          "assets/images/portfolio/portfolio-2.jpg",
          "assets/images/portfolio/portfolio-3.jpg",
          "assets/images/portfolio/portfolio-4.jpg",
          "assets/images/portfolio/portfolio-5.jpg",
          "assets/images/portfolio/portfolio-6.jpg",
          "assets/images/portfolio/portfolio-7.jpg",
          "assets/images/portfolio/portfolio-8.jpg",
          "assets/images/portfolio/portfolio-9.jpg",
          "assets/images/portfolio/portfolio-10.jpg",
          "assets/images/portfolio/portfolio-11.jpg",
          "assets/images/portfolio/portfolio-12.jpg",
        ]}
        active={activeModal}
        close={() => setActiveModal(false)}
      />
    </section>
  );
}

export default Work;

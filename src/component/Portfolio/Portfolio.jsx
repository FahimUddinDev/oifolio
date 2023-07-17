import { useState } from "react";
import PortfolioCardV2 from "../Cards/PortfolioCardV2";
import ImageSlider from "../ImagePopup/ImageSlider";

function Portfolio() {
  const [popup, setPopup] = useState(false);
  return (
    <>
      <section className="portfolio-style-2-area portfolio-6-area">
        <div className="container custom-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h3 className="title">showcase your works</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <PortfolioCardV2
              portfolio={{
                img: "assets/images/portfolio/item-1.jpg",
                link: "#",
                desc: "Project experience",
                title: "Fast matching with content delivery.",
                category: "UI DESIGN",
                id: 1,
              }}
              popupIsOpen={setPopup}
            />
            <PortfolioCardV2
              portfolio={{
                img: "assets/images/portfolio/item-2.jpg",
                link: "#",
                desc: "Project experience",
                title: "Fast matching with content delivery.",
                category: "UI DESIGN",
                id: 2,
              }}
              popupIsOpen={setPopup}
            />
            <PortfolioCardV2
              portfolio={{
                img: "assets/images/portfolio/item-3.jpg",
                link: "#",
                desc: "Project experience",
                title: "Fast matching with content delivery.",
                category: "UI DESIGN",
                id: 3,
              }}
              popupIsOpen={setPopup}
            />
          </div>
        </div>
      </section>
      <ImageSlider
        images={[
          "assets/images/portfolio/item-1.jpg",
          "assets/images/portfolio/item-2.jpg",
          "assets/images/portfolio/item-3.jpg",
        ]}
        active={popup}
        close={() => setPopup(false)}
      />
    </>
  );
}

export default Portfolio;

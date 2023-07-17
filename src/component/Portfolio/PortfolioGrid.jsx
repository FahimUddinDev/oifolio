import ProtoTypes from "prop-types";
import { useState } from "react";
import PortfolioCardV2 from "../Cards/PortfolioCardV2";
import ImageSlider from "../ImagePopup/ImageSlider";

function PortfolioGrid({ gridCol }) {
  const [popup, setPopup] = useState(false);
  return (
    <>
      <section className="portfolio-style-2-area">
        <div className="container custom-container">
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
              className={gridCol ? gridCol : ""}
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
              className={gridCol ? gridCol : ""}
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
              className={gridCol ? gridCol : ""}
            />
            <PortfolioCardV2
              portfolio={{
                img: "assets/images/portfolio/item-4.jpg",
                link: "#",
                desc: "Project experience",
                title: "Fast matching with content delivery.",
                category: "UI DESIGN",
                id: 4,
              }}
              popupIsOpen={setPopup}
              className={gridCol ? gridCol : ""}
            />
            <PortfolioCardV2
              portfolio={{
                img: "assets/images/portfolio/item-5.jpg",
                link: "#",
                desc: "Project experience",
                title: "Fast matching with content delivery.",
                category: "UI DESIGN",
                id: 5,
              }}
              popupIsOpen={setPopup}
              className={gridCol ? gridCol : ""}
            />
            <PortfolioCardV2
              portfolio={{
                img: "assets/images/portfolio/item-6.jpg",
                link: "#",
                desc: "Project experience",
                title: "Fast matching with content delivery.",
                category: "UI DESIGN",
                id: 6,
              }}
              popupIsOpen={setPopup}
              className={gridCol ? gridCol : ""}
            />
            <PortfolioCardV2
              portfolio={{
                img: "assets/images/portfolio/item-7.jpg",
                link: "#",
                desc: "Project experience",
                title: "Fast matching with content delivery.",
                category: "UI DESIGN",
                id: 7,
              }}
              popupIsOpen={setPopup}
              className={gridCol ? gridCol : ""}
            />
            <PortfolioCardV2
              portfolio={{
                img: "assets/images/portfolio/item-8.jpg",
                link: "#",
                desc: "Project experience",
                title: "Fast matching with content delivery.",
                category: "UI DESIGN",
                id: 8,
              }}
              popupIsOpen={setPopup}
              className={gridCol ? gridCol : ""}
            />
            <PortfolioCardV2
              portfolio={{
                img: "assets/images/portfolio/item-9.jpg",
                link: "#",
                desc: "Project experience",
                title: "Fast matching with content delivery.",
                category: "UI DESIGN",
                id: 9,
              }}
              popupIsOpen={setPopup}
              className={gridCol ? gridCol : ""}
            />
            <PortfolioCardV2
              portfolio={{
                img: "assets/images/portfolio/item-10.jpg",
                link: "#",
                desc: "Project experience",
                title: "Fast matching with content delivery.",
                category: "UI DESIGN",
                id: 10,
              }}
              popupIsOpen={setPopup}
              className={gridCol ? gridCol : ""}
            />
            <PortfolioCardV2
              portfolio={{
                img: "assets/images/portfolio/item-11.jpg",
                link: "#",
                desc: "Project experience",
                title: "Fast matching with content delivery.",
                category: "UI DESIGN",
                id: 11,
              }}
              popupIsOpen={setPopup}
              className={gridCol ? gridCol : ""}
            />
            <PortfolioCardV2
              portfolio={{
                img: "assets/images/portfolio/item-12.jpg",
                link: "#",
                desc: "Project experience",
                title: "Fast matching with content delivery.",
                category: "UI DESIGN",
                id: 12,
              }}
              popupIsOpen={setPopup}
              className={gridCol ? gridCol : ""}
            />
          </div>
        </div>
      </section>
      <ImageSlider
        images={[
          "assets/images/portfolio/item-1.jpg",
          "assets/images/portfolio/item-2.jpg",
          "assets/images/portfolio/item-3.jpg",
          "assets/images/portfolio/item-4.jpg",
          "assets/images/portfolio/item-5.jpg",
          "assets/images/portfolio/item-6.jpg",
          "assets/images/portfolio/item-7.jpg",
          "assets/images/portfolio/item-8.jpg",
          "assets/images/portfolio/item-9.jpg",
          "assets/images/portfolio/item-10.jpg",
          "assets/images/portfolio/item-11.jpg",
          "assets/images/portfolio/item-12.jpg",
        ]}
        active={popup}
        close={() => setPopup(false)}
      />
    </>
  );
}
PortfolioGrid.propTypes = {
  gridCol: ProtoTypes.string,
};

export default PortfolioGrid;

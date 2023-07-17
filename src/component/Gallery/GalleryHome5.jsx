import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import PortfoiloCard from "../Cards/PortfoiloCard";
import { Link } from "react-router-dom";

function GalleryHome5() {
  return (
    <div className="portfolio-style-1-area">
      <div className="container custom-container">
        <div className="mt-40">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 3, 900: 4 }}
          >
            <Masonry gutter="30px">
              <PortfoiloCard
                img="assets/images/gallery/1.jpg"
                category="DESIGN"
                title="Holidaymakers"
                link="#"
              />
              <PortfoiloCard
                img="assets/images/gallery/2.jpg"
                category="DESIGN"
                title="Holidaymakers"
                link="#"
              />
              <PortfoiloCard
                img="assets/images/gallery/3.jpg"
                category="DESIGN"
                title="Holidaymakers"
                link="#"
              />
              <PortfoiloCard
                img="assets/images/gallery/4.jpg"
                category="DESIGN"
                title="Holidaymakers"
                link="#"
              />
              <PortfoiloCard
                img="assets/images/gallery/5.jpg"
                category="DESIGN"
                title="Holidaymakers"
                link="#"
              />
              <PortfoiloCard
                img="assets/images/gallery/6.jpg"
                category="DESIGN"
                title="Holidaymakers"
                link="#"
              />
              <PortfoiloCard
                img="assets/images/gallery/7.jpg"
                category="DESIGN"
                title="Holidaymakers"
                link="#"
              />
              <PortfoiloCard
                img="assets/images/gallery/8.jpg"
                category="DESIGN"
                title="Holidaymakers"
                link="#"
              />
              <PortfoiloCard
                img="assets/images/gallery/9.jpg"
                category="DESIGN"
                title="Holidaymakers"
                link="#"
              />
              <PortfoiloCard
                img="assets/images/gallery/10.jpg"
                category="DESIGN"
                title="Holidaymakers"
                link="#"
              />
              <PortfoiloCard
                img="assets/images/gallery/12.jpg"
                category="DESIGN"
                title="Holidaymakers"
                link="#"
              />
              <PortfoiloCard
                img="assets/images/gallery/11.jpg"
                category="DESIGN"
                title="Holidaymakers"
                link="#"
              />
              <div></div>
              <PortfoiloCard
                img="assets/images/gallery/14.jpg"
                category="DESIGN"
                title="Holidaymakers"
                link="#"
              />
              <div></div>
              <PortfoiloCard
                img="assets/images/gallery/13.jpg"
                category="DESIGN"
                title="Holidaymakers"
                link="#"
              />
            </Masonry>
          </ResponsiveMasonry>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center mt-70">
              <Link className="main-btn-2" to="#">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryHome5;

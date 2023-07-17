import { useState } from "react";
import WorkCard from "../Cards/WorkCard";
import ImageSlider from "../ImagePopup/ImageSlider";

function WorkHome2() {
  const [popup, setPopup] = useState(false);
  return (
    <>
      <section data-scroll-index="1" className="work-area work-2-area">
        <div className="container  custom-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h3 className="title">My Works</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="container custom-container">
          <div className="row grid align-items-center">
            <WorkCard
              work={{
                img: "assets/images/gallery-item-1.jpg",
                link: "#",
                name: "Project experience",
                category: "UI DESIGN",
                id: 1,
              }}
              popupIsOpen={setPopup}
            />
            <WorkCard
              work={{
                img: "assets/images/gallery-item-2.jpg",
                link: "#",
                name: "Project experience",
                category: "UI DESIGN",
                id: 2,
              }}
              popupIsOpen={setPopup}
            />
            <WorkCard
              work={{
                img: "assets/images/gallery-item-3.jpg",
                link: "#",
                name: "Project experience",
                category: "UI DESIGN",
                id: 3,
              }}
              popupIsOpen={setPopup}
            />
            <WorkCard
              work={{
                img: "assets/images/gallery-item-4.jpg",
                link: "#",
                name: "Project experience",
                category: "UI DESIGN",
                id: 4,
              }}
              popupIsOpen={setPopup}
            />
          </div>
        </div>
      </section>
      <ImageSlider
        images={[
          "assets/images/gallery-item-1.jpg",
          "assets/images/gallery-item-2.jpg",
          "assets/images/gallery-item-3.jpg",
          "assets/images/gallery-item-4.jpg",
        ]}
        active={popup}
        close={() => setPopup(false)}
      />
    </>
  );
}

export default WorkHome2;

import { useState } from "react";
import AboutCard from "../Cards/AboutCard";

function About() {
  const [activeCard, setActiveCard] = useState(2);
  return (
    <section className="about-area">
      <div className="container custom-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h3 className="title">We Do Three Things</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <AboutCard
            card={{
              name: "Design",
              id: 1,
              desc: "Home insurance is a type of insurance policy that provides cover for your home.",
              img: "assets/images/icon/icon-1.svg",
            }}
            isActive={activeCard}
            setActive={setActiveCard}
          />
          <AboutCard
            card={{
              name: "Marketing",
              id: 2,
              desc: "Home insurance is a type of insurance policy that provides cover for your home.",
              img: "assets/images/icon/icon-2.svg",
            }}
            isActive={activeCard}
            setActive={setActiveCard}
          />
          <AboutCard
            card={{
              name: "Developing",
              id: 3,
              desc: "Home insurance is a type of insurance policy that provides cover for your home.",
              img: "assets/images/icon/icon-3.svg",
            }}
            isActive={activeCard}
            setActive={setActiveCard}
          />
          <div className="col-lg-12">
            <div className="about-text">
              <p className="text">
                We help organisations transform their impact. We identify
                opportunities you can uniquely own by analysing your business,
                your market, and cultural shifts in the world. We define your
                north star: why you exist, what makes you unique and what you’re
                here to do in a compelling and differentiating way.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-shape-2">
        <img src="assets/images/shape/shape-6.png" alt="" />
      </div>
    </section>
  );
}

export default About;

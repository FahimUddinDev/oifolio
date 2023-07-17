import { useEffect, useState } from "react";
import Loader from "../../component/Loader/Loader";
import Header from "../../component/Headers/Header";
import Footer from "../../component/Footer/Footer";
import GotoTop from "../../component/GoToTop";
import AboutTitle from "../../component/About/AboutTitle";
import ServiceAbout from "../../component/Service/ServiceAbout";
import Relationship from "../../component/About/Relationship";
import Partners from "../../component/Partners/Partners";
import Awards from "../../component/Awards/Awards";
import ProjectBoxV2 from "../../component/JoinUs/ProjectBoxV2";

function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  let content = undefined;

  if (loading) {
    content = <Loader />;
  }
  if (!loading) {
    content = (
      <>
        <Header />
        <AboutTitle
          thumb="assets/images/about-thumb.jpg"
          title="About us"
          heading="We make strategies, design & development to create valuable products."
        />
        <ServiceAbout />
        <Relationship />
        <Partners className="about-partners-area" />
        <Awards />
        <ProjectBoxV2 />
        <Footer />
        <GotoTop />
      </>
    );
  }
  return content;
}

export default About;

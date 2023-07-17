import { useEffect, useState } from "react";
import Loader from "../../component/Loader/Loader";
import Header from "../../component/Headers/Header";
import Footer from "../../component/Footer/Footer";
import GotoTop from "../../component/GoToTop";
import ProjectBoxV2 from "../../component/JoinUs/ProjectBoxV2";
import AboutTitle from "../../component/About/AboutTitle";
import PortfolioGrid from "../../component/Portfolio/PortfolioGrid";

function Portfolio() {
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
          title="Portfolio"
          heading="Showcase Your Works"
          desc="Creative way to showcase your works at their absolute best."
        />
        <PortfolioGrid gridCol="col-xl-3" />
        <ProjectBoxV2 />
        <Footer />
        <GotoTop />
      </>
    );
  }
  return content;
}

export default Portfolio;

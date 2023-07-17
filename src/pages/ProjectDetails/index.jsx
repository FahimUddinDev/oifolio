import { useEffect, useState } from "react";
import Loader from "../../component/Loader/Loader";
import Header from "../../component/Headers/Header";
import Footer from "../../component/Footer/Footer";
import GotoTop from "../../component/GoToTop";
import ProjectBoxV2 from "../../component/JoinUs/ProjectBoxV2";
import PageTitleV3 from "../../component/PageTitle/PageTitleV3";
import Details from "../../component/Projects/Details";
import RelatedProjects from "../../component/Projects/RelatedProjects";

function ProjectDetails() {
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
        <Header
          className="header-page-area"
          toggleBtnImg="assets/images/bars-2.png"
          logo="assets/images/logo-2.png"
        />
        <PageTitleV3 title="Project Title Simple Is The Leading Healthcare Startup." />
        <Details />
        <RelatedProjects />
        <ProjectBoxV2 />
        <Footer />
        <GotoTop />
      </>
    );
  }
  return content;
}

export default ProjectDetails;

import { useEffect, useState } from "react";
import Loader from "../../component/Loader/Loader";
import Header from "../../component/Headers/Header";
import GotoTop from "../../component/GoToTop";
import FooterV2 from "../../component/Footer/FooterV2";
import HeroHome6 from "../../component/Hero/HeroHome6";
import About from "../../component/About/About";
import SkillsHome2 from "../../component/Skils/SkillsHome2";
import Partners from "../../component/Partners/Partners";
import Portfolio from "../../component/Portfolio/Portfolio";
import BlogHome6 from "../../component/Blogs/BlogHome6";
import ProjectBox from "../../component/JoinUs/ProjectBox";
import Testimonials from "../../component/Testimonials/Testimonials";

function Home6() {
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
          topbar={true}
          className="header-style-6"
          togglbtnClass="d-block d-lg-none"
        />
        <HeroHome6 />
        <About />
        <SkillsHome2 className="mt-135" />
        <Partners className="partners-6-arae" />
        <Portfolio />
        <Testimonials
          nextBtn="nextBtn2 prevBtn2"
          prevBtn="prevBtn2"
          className="testimonial-6-area"
        />
        <BlogHome6 />
        <ProjectBox />
        <FooterV2 />
        <GotoTop />
      </>
    );
  }
  return content;
}

export default Home6;

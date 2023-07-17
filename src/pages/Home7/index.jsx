import { useEffect, useState } from "react";
import Loader from "../../component/Loader/Loader";
import Footer from "../../component/Footer/Footer";
import GotoTop from "../../component/GoToTop";
import HeaderV2 from "../../component/Headers/HeaderV2";
import ServiceHome4 from "../../component/Service/ServiceHome4";
import HeroHome7 from "../../component/Hero/HeroHome7";
import WorkHome2 from "../../component/Work/WorkHome2";
import ProjectBox from "../../component/JoinUs/ProjectBox";
import BlogHome6 from "../../component/Blogs/BlogHome6";
import CreativeHome7 from "../../component/Creative/CreativeHome7";
import TeamV2 from "../../component/Team/TeamV2";
import Testimonials from "../../component/Testimonials/Testimonials";

function Home7() {
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
        <HeaderV2 className="header-7-area" />
        <HeroHome7 />
        <ServiceHome4 className="services-7-area pt-110 pb-125" />
        <WorkHome2 />
        <CreativeHome7 />
        <Testimonials
          className="testimonial-7-area"
          nextBtn="prevBtn3 nextBtn3"
          prevBtn=" prevBtn3"
        />
        <TeamV2 />
        <BlogHome6 />
        <ProjectBox />
        <Footer />
        <GotoTop />
      </>
    );
  }
  return content;
}

export default Home7;

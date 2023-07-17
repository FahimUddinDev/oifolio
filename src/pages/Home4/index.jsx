import { useEffect, useState } from "react";
import Loader from "../../component/Loader/Loader";
import Blogs from "../../component/Blogs/Blogs";
import Footer from "../../component/Footer/Footer";
import Pricing from "../../component/Pricing/Pricing";
import GotoTop from "../../component/GoToTop";
import HeaderV2 from "../../component/Headers/HeaderV2";
import HeroHome4 from "../../component/Hero/HeroHome4";
import Solution from "../../component/Solution/Solution";
import ServiceHome4 from "../../component/Service/ServiceHome4";
import TestimonialsHome4 from "../../component/Testimonials/TestimonialsHome4";
import Gallery from "../../component/Gallery/Gallery";
import AwardHome4 from "../../component/Awards/AwardHome4";
import CreatedArea from "../../component/CreatedArea/CreatedArea";

function Home4() {
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
        <HeaderV2 />
        <HeroHome4 />
        <Solution />
        <ServiceHome4 />
        <TestimonialsHome4 />
        <Gallery />
        <Pricing className="pricing-4-area" />
        <AwardHome4 />
        <Blogs />
        <CreatedArea />
        <Footer />
        <GotoTop />
      </>
    );
  }
  return content;
}

export default Home4;

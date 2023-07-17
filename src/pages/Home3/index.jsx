import { useEffect, useState } from "react";
import Loader from "../../component/Loader/Loader";
import Header from "../../component/Headers/Header";
import Blogs from "../../component/Blogs/Blogs";
import JoinUs from "../../component/JoinUs/JoinUs";
import Footer from "../../component/Footer/Footer";
import HeroHome3 from "../../component/Hero/HeroHome3";
import ServiceHome3 from "../../component/Service/ServiceHome3";
import Creative from "../../component/Creative/Creative";
import WorkHome3 from "../../component/Work/WorkHome3";
import Pricing from "../../component/Pricing/Pricing";
import GotoTop from "../../component/GoToTop";

function Home3() {
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
        <HeroHome3 />
        <ServiceHome3 />
        <Creative />
        <WorkHome3 />
        <Pricing />
        <Blogs />
        <JoinUs />
        <Footer />
        <GotoTop />
      </>
    );
  }
  return content;
}

export default Home3;

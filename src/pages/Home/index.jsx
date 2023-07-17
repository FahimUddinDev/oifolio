import { useEffect, useState } from "react";
import Loader from "../../component/Loader/Loader";
import Header from "../../component/Headers/Header";
import Hero from "../../component/Hero/Hero";
import Work from "../../component/Work/Work";
import ImageSlider from "../../component/ImagePopup/ImageSlider";
import About from "../../component/About/About";
import Team from "../../component/Team/Team";
import Play from "../../component/Play/Play";
import Skils from "../../component/Skils/Skils";
import Blogs from "../../component/Blogs/Blogs";
import JoinUs from "../../component/JoinUs/JoinUs";
import Footer from "../../component/Footer/Footer";
import GotoTop from "../../component/GoToTop";

function Home() {
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
        <Hero />
        <Work />
        <ImageSlider />
        <About />
        <Team />
        <Play />
        <Skils />
        <Blogs />
        <JoinUs />
        <Footer />
        <GotoTop />
      </>
    );
  }
  return content;
}

export default Home;

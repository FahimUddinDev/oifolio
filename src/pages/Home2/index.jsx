import { useEffect, useState } from "react";
import Loader from "../../component/Loader/Loader";
import Header from "../../component/Headers/Header";
import Footer from "../../component/Footer/Footer";
import HeroHome2 from "../../component/Hero/HeroHome2";
import WorkHome2 from "../../component/Work/WorkHome2";
import SkillsHome2 from "../../component/Skils/SkillsHome2";
import Counter from "../../component/Counter/Counter";
import Pricing from "../../component/Pricing/Pricing";
import Testimonials from "../../component/Testimonials/Testimonials";
import Service from "../../component/Service/Service";
import Partners from "../../component/Partners/Partners";
import Awards from "../../component/Awards/Awards";
import ContactForms from "../../component/Forms/ContactForms";
import GotoTop from "../../component/GoToTop";

function Home2() {
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
        <HeroHome2 />
        <WorkHome2 />
        <SkillsHome2 />
        <Counter />
        <Pricing />
        <Testimonials />
        <Service />
        <Partners />
        <Awards />
        <ContactForms />
        <Footer />
        <GotoTop />
      </>
    );
  }
  return content;
}

export default Home2;

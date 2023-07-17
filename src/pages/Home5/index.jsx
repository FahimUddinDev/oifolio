import { useEffect, useState } from "react";
import Loader from "../../component/Loader/Loader";
import Header from "../../component/Headers/Header";
import Footer from "../../component/Footer/Footer";
import GotoTop from "../../component/GoToTop";
import GalleryHome5 from "../../component/Gallery/GalleryHome5";
import ContactForms from "../../component/Forms/ContactForms";

function Home5() {
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
        <GalleryHome5 />
        <ContactForms />
        <Footer />
        <GotoTop />
      </>
    );
  }
  return content;
}

export default Home5;

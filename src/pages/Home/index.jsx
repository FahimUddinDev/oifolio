import { useEffect, useState } from "react";
import Loader from "../../component/Loader/Loader";
import OffCanvas from "../../component/Headers/Offcanvas";
import Header from "../../component/Headers/Header";
import Hero from "../../component/Hero/Hero";

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
        <OffCanvas />
        <Header />
        <Hero />
      </>
    );
  }
  return content;
}

export default Home;

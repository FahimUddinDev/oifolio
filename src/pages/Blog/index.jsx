import { useEffect, useState } from "react";
import Loader from "../../component/Loader/Loader";
import Header from "../../component/Headers/Header";
import Footer from "../../component/Footer/Footer";
import GotoTop from "../../component/GoToTop";
import ProjectBoxV2 from "../../component/JoinUs/ProjectBoxV2";
import PageTitle from "../../component/PageTitle/PageTitle";
import BlogHighlight from "../../component/Blogs/BlogHighlight";
import HotBlogs from "../../component/Blogs/HotBlogs";

function Blog() {
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
        <PageTitle
          title="Blog"
          heading="Latest Articles"
          desc="Creative way to showcase your works at their absolute best."
        />
        <BlogHighlight />
        <HotBlogs />
        <ProjectBoxV2 />
        <Footer />
        <GotoTop />
      </>
    );
  }
  return content;
}

export default Blog;

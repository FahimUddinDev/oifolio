import { useEffect, useState } from "react";
import Loader from "../../component/Loader/Loader";
import Header from "../../component/Headers/Header";
import Footer from "../../component/Footer/Footer";
import GotoTop from "../../component/GoToTop";
import ProjectBoxV2 from "../../component/JoinUs/ProjectBoxV2";
import PageTitleV2 from "../../component/PageTitle/PageTitleV2";
import Details from "../../component/Blogs/Details";
import BlogTags from "../../component/Blogs/BlogTags";
import CommentForm from "../../component/Forms/CommentForm";
import BlogComment from "../../component/Blogs/BlogComment";
import comments from "../../data/comments";
import Blogs from "../../component/Blogs/Blogs";
import PageTitleV4 from "../../component/PageTitle/PageTitleV4";
import ContactForms from "../../component/Forms/ContactForms";
import ContactItems from "../../component/Contact/ContactItems";

function Contact() {
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
        <PageTitleV4
          title="Contact Us"
          info="Creative way to showcase your works at their absolute best."
        />
        <ContactForms className="contact-page-box-area" />
        <ContactItems />
        <ProjectBoxV2 />
        <Footer />
        <GotoTop />
      </>
    );
  }
  return content;
}

export default Contact;

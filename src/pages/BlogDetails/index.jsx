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

function BlogDetails() {
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
        <PageTitleV2
          title="Taking Photo In The Middle Of"
          authorName="Adame Doe"
          authorProfile="#"
          publishDate="October 20, 2020"
        />
        <Details />
        <BlogTags
          tags={[
            { name: "UI DESIGN", id: 1, link: "#" },
            { name: "MARKETING", id: 2, link: "#" },
            { name: "GRAPHICS", id: 3, link: "#" },
            { name: "GREATER", id: 4, link: "#" },
          ]}
          likes="21"
        />
        <CommentForm />
        <BlogComment comments={comments} />
        <Blogs />
        <ProjectBoxV2 />
        <Footer />
        <GotoTop />
      </>
    );
  }
  return content;
}

export default BlogDetails;

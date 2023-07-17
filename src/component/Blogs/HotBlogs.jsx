import BlogCard from "../Cards/BlogCard";
import blogs from "../../data/blogs";

function HotBlogs() {
  return (
    <section className="blog-grid-area pt-115 pb-120 sm-pb-20 sm-pt-20">
      <div className="container custom-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h3 className="title">Hot post</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {blogs?.map((blog) => (
            <div className="col-lg-4 col-md-6" key={blog.id}>
              <BlogCard blog={blog} />
            </div>
          ))}
          {blogs?.map((blog) => (
            <div className="col-lg-4 col-md-6" key={blog.id}>
              <BlogCard blog={blog} />
            </div>
          ))}
          {blogs?.map((blog) => (
            <div className="col-lg-4 col-md-6" key={blog.id}>
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HotBlogs;

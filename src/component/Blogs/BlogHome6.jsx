import blogs from "../../data/blogs";
import BlogCard from "../Cards/BlogCard";

function BlogHome6() {
  return (
    <section className="blog-area blog-6-area sm-pt-20">
      <div className="container custom-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h3 className="title">Related Articles</h3>
            </div>
          </div>
        </div>
        <div className="row">
          {blogs?.map(
            (blog, index) =>
              index < 3 && (
                <div className="col-lg-4" key={blog.id}>
                  <BlogCard blog={blog} style={{ paddingBottom: "0" }} />
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
}

export default BlogHome6;

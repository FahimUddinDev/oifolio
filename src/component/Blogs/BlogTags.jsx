import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";

function BlogTags({ tags, likes }) {
  return (
    <div className="blog-tags-area">
      <div className="container custom-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="blog-tags-item d-block d-md-flex justify-content-between align-items-center">
              <div className="blog-tag">
                <ul style={{ display: "flex", gap: "5px" }}>
                  <li>
                    <span>Tags: </span>
                  </li>
                  {tags?.map((tag, index) => (
                    <li key={tag.id}>
                      <Link to={tag.link}>
                        {tag.name}
                        {index === tags.length - 1 ? "" : ","}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="blog-likes">
                <span>
                  {likes} likes <i className="fa fa-heart"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
BlogTags.propTypes = {
  tags: ProtoTypes.array,
  likes: ProtoTypes.string,
};

export default BlogTags;

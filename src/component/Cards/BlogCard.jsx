import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";

function BlogCard({ blog, style }) {
  const { categories, img, link, title, author, postedDate } = blog;
  return (
    <div
      className="blog-item"
      style={style ? style : { paddingBottom: "60px" }}
    >
      <div className="blog-thumb">
        <img src={img} alt="" />
        <div className="blog-categories">
          <ul>
            {categories.map((category) => (
              <li key={category.id}>
                <Link to={category.link}>{category.category}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="blog-content">
        <Link to={link}>
          <h3 className="title">{title}</h3>
        </Link>
        <div className="blog-meta">
          <div className="admin">
            <Link to={author.profile}>
              By <span>{author.name}</span>
            </Link>
          </div>
          <div className="date">
            <p>{postedDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
BlogCard.propTypes = {
  blog: ProtoTypes.object,
  style: ProtoTypes.object,
};
export default BlogCard;

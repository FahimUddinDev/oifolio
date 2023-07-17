import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";

function PageTitleV2({ title, authorName, authorProfile, publishDate }) {
  return (
    <div className="page-title-area blog-details-page-area d-flex align-items-center">
      <div className="bg-image"></div>
      <div className="container custom-container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="page-title-content text-center">
              <h3 className="title">{title}</h3>
              <div className="blog-meta d-flex justify-content-center">
                <div className="admin">
                  <Link to={authorProfile} tabIndex="0">
                    By <span>{authorName}</span>
                  </Link>
                </div>
                <div className="date">
                  <p>{publishDate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
PageTitleV2.propTypes = {
  title: ProtoTypes.string,
  authorName: ProtoTypes.string,
  authorProfile: ProtoTypes.string,
  publishDate: ProtoTypes.string,
};

export default PageTitleV2;

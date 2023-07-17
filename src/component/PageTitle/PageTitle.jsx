import ProtoTypes from "prop-types";

function PageTitle({ heading, title, desc }) {
  return (
    <div className="page-title-area blog-page-title-area d-flex align-items-center">
      <div className="bg-image"></div>
      <div className="container custom-container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="page-title-content text-center">
              <span>{title}</span>
              <h3 className="title">{heading}</h3>
              <p>{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

PageTitle.propTypes = {
  heading: ProtoTypes.string,
  title: ProtoTypes.string,
  desc: ProtoTypes.string,
};

export default PageTitle;

import ProtoTypes from "prop-types";

function PageTitleV3({ title }) {
  return (
    <div className="page-title-area d-flex align-items-center">
      <div className="bg-image"></div>
      <div className="container custom-container">
        <div className="row">
          <div className="col-lg-9">
            <div className="page-title-content">
              <h3 className="title">{title}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
PageTitleV3.propTypes = {
  title: ProtoTypes.string,
};

export default PageTitleV3;

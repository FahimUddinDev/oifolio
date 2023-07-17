import ProtoTypes from "prop-types";

function PageTitleV4({ title, info }) {
  return (
    <div className="page-title-area contact-page-title-area d-flex align-items-center">
      <div className="bg-image"></div>
      <div className="container custom-container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="page-title-content text-center">
              <h3 className="title">{title}</h3>
              <p>{info}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
PageTitleV4.propTypes = {
  title: ProtoTypes.string,
  info: ProtoTypes.string,
};

export default PageTitleV4;

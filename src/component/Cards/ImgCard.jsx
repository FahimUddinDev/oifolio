import ProtoTypes from "prop-types";
function ImgCard({ img, title }) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="portfolio-item">
        <img src={img} alt="portfolio" />
        <div className="portfolio-overlay d-flex align-items-end">
          <div className="portfolio-text">
            <h3 className="title">{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
ImgCard.propTypes = {
  title: ProtoTypes.string,
  img: ProtoTypes.string,
};
export default ImgCard;

import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";

function WorkCard({ work, popupIsOpen }) {
  const { img, link, name, category, id } = work;
  return (
    <div className="col-lg-3 col-md-6">
      <div
        className="portfolio-item mb-30 animated wow fadeInUp"
        data-wow-duration="1500ms"
        data-wow-delay="300ms"
      >
        <div className="item">
          <a className="image-popup" onClick={() => popupIsOpen(id)}>
            <img src={img} alt="portfolio" />
          </a>
        </div>
        <div className="portfolio-content">
          <Link to={link}>{name}</Link>
          <span>{category}</span>
        </div>
      </div>
    </div>
  );
}
WorkCard.propTypes = {
  work: ProtoTypes.object,
  popupIsOpen: ProtoTypes.func,
};

export default WorkCard;

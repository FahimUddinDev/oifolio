import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";

function PortfolioCardV2({ portfolio, popupIsOpen, className }) {
  const { id, img, title, link, category, desc } = portfolio;
  return (
    <div className={`col-lg-4 col-md-6 ${className ? className : ""}`}>
      <div
        className="portfolio-item animated wow fadeInUp"
        data-wow-duration="1500ms"
        data-wow-delay="300ms"
      >
        <div className="item mt-30">
          <a className="image-popup" onClick={() => popupIsOpen(id)}>
            <img src={img} alt="portfolio" />
            <div className="item-overlay">
              <h4 className="title">{title}</h4>
            </div>
          </a>
        </div>
        <div className="portfolio-style-2-content">
          <Link to={link}>{desc}</Link>
          <span>{category}</span>
        </div>
      </div>
    </div>
  );
}
PortfolioCardV2.propTypes = {
  portfolio: ProtoTypes.object,
  popupIsOpen: ProtoTypes.func,
  className: ProtoTypes.string,
};

export default PortfolioCardV2;

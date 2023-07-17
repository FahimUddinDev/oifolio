import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";

function PortfoiloCard({ img, category, title, link }) {
  return (
    <div className="portfolio-style-1-item  text-center">
      <div className="portfolio-thumb">
        <img src={img} alt="" />
      </div>
      <span>{category}</span>
      <Link to={link}>{title} </Link>
    </div>
  );
}
PortfoiloCard.propTypes = {
  title: ProtoTypes.string,
  img: ProtoTypes.string,
  category: ProtoTypes.string,
  link: ProtoTypes.string,
};

export default PortfoiloCard;

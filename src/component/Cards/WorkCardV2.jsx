import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";

function WorkCardV2({ imgLeft, img, category, title, link }) {
  return imgLeft ? (
    <div className="working-progress-box pb-80">
      <div className="row align-items-center">
        <div className="col-lg-5">
          <div
            className="working-progress-thumb animated wow fadeInLeft"
            data-wow-duration="1500ms"
            data-wow-delay="300ms"
          >
            <img src={img} alt="" />
          </div>
        </div>
        <div className="col-lg-7">
          <div className="working-progress-content">
            <span>{category}</span>
            <h2 className="title">{title}</h2>
            <Link to={link}>Read more</Link>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="working-progress-box item-2 pb-80">
      <div className="row align-items-center">
        <div className="col-lg-7 order-2 order-lg-1">
          <div className="working-progress-content">
            <span>{category}</span>
            <h2 className="title">{title}</h2>
            <Link to={link}>Read more</Link>
          </div>
        </div>
        <div className="col-lg-5 order-1 order-lg-2">
          <div
            className="working-progress-thumb animated wow fadeInRight"
            data-wow-duration="1500ms"
            data-wow-delay="300ms"
          >
            <img src={img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
WorkCardV2.propTypes = {
  title: ProtoTypes.string,
  imgLeft: ProtoTypes.bool,
  img: ProtoTypes.string,
  category: ProtoTypes.string,
  link: ProtoTypes.string,
};

export default WorkCardV2;

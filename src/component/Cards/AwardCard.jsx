import ProtoTypes from "prop-types";
function AwardCard({ img, title, desc, num, className }) {
  return (
    <div className={`awards-item ${className ? className : ""}`}>
      <img src={img} alt="awards" />
      <h5>{title}</h5>
      <span>{desc}</span>
      <h2 className="title">{num}</h2>
    </div>
  );
}

AwardCard.propTypes = {
  title: ProtoTypes.string,
  img: ProtoTypes.string,
  desc: ProtoTypes.string,
  num: ProtoTypes.number,
  className: ProtoTypes.string,
};

export default AwardCard;

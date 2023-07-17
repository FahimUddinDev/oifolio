import ProtoTypes from "prop-types";

function AboutCard({ card, setActive, isActive }) {
  const { name, id, desc, img } = card;
  return (
    <div className="col-xl-4 col-lg-6" onClick={() => setActive(id)}>
      <div className={`about-item mt-20 ${isActive === id ? "active" : ""}`}>
        <h4 className="title">{name}</h4>
        <p>{desc}</p>
        <div className="icon">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
}
AboutCard.propTypes = {
  card: ProtoTypes.object,
  setActive: ProtoTypes.func,
  isActive: ProtoTypes.number,
};
export default AboutCard;

import ProtoTypes from "prop-types";

function AboutTitle({ thumb, title, heading, desc }) {
  return (
    <>
      <section className="about-top-tltle-area">
        <div className="container custom-container">
          <div className="row">
            <div className="col-lg-9">
              <div className="about-top-tltle-content">
                <span>{title}</span>
                <h3 className="title">{heading}</h3>
                <p>{desc}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-shape">
          <img src="assets/images/shape/shape-2.png" alt="" />
        </div>
      </section>

      {thumb && (
        <div className="about-thumb">
          <img src="assets/images/about-thumb.jpg" alt="" />
        </div>
      )}
    </>
  );
}

AboutTitle.propTypes = {
  thumb: ProtoTypes.string,
  title: ProtoTypes.string,
  heading: ProtoTypes.string,
  desc: ProtoTypes.string,
};

export default AboutTitle;

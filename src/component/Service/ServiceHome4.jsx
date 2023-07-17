import ProtoTypes from "prop-types";
function ServiceHome4({ className }) {
  return (
    <section className={`services-4-area ${className ? className : ""}`}>
      <div className="container custom-container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-8">
            <div className="services-4-item mt-40">
              <h3 className="title">
                <img src="assets/images/icon/icon-1.png" alt="" /> User
                Experience
              </h3>
              <p>
                Home insurance is a type of insurance policy that provides cover
                for your home.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-8">
            <div className="services-4-item mt-40">
              <h3 className="title">
                <img src="assets/images/icon/icon-2.png" alt="" /> User
                experience{" "}
              </h3>
              <p>
                Home insurance is a type of insurance policy that provides cover
                for your home.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-8">
            <div className="services-4-item mt-40">
              <h3 className="title">
                <img src="assets/images/icon/icon-3.png" alt="" /> User
                Experience
              </h3>
              <p>
                Home insurance is a type of insurance policy that provides cover
                for your home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

ServiceHome4.propTypes = {
  className: ProtoTypes.string,
};

export default ServiceHome4;

import ProtoTypes from "prop-types";
function ContactForms({ className }) {
  return (
    <section className={`contact-box-area ${className ? className : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="contact-box">
              <div className="row justify-content-center">
                <div className="col-lg-9">
                  <div className="section-title text-center">
                    <h3 className="title">Get In Touch</h3>
                    <p>
                      TELL ME WHY YOU WANT TO HAVE A PORTRAIT SESSION AND WHAT
                      DO YOU EXPECT FROM IT.
                    </p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <form action="#">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="input-box mt-40">
                          <input type="text" placeholder="Name" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="input-box mt-40">
                          <input type="text" placeholder="Phone" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="input-box mt-40">
                          <input type="email" placeholder="Email" />
                        </div>
                        <div className="input-box mt-40 text-center">
                          <textarea
                            name="#"
                            id="#"
                            cols="30"
                            rows="10"
                            placeholder="Your message"
                          ></textarea>
                          <button className="main-btn mt-70" type="button">
                            Get Started
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="shape-1">
                <img src="assets/images/shape/shape-3.png" alt="" />
              </div>
              <div className="shape-2">
                <img src="assets/images/shape/shape-3.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

ContactForms.propTypes = {
  className: ProtoTypes.string,
};

export default ContactForms;

import { Link } from "react-router-dom";

function Details() {
  return (
    <section className="blog-details-area">
      <div className="container custom-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="blog-details-top-bg">
              <div className="bg-image"></div>
              <div className="blog-details-bg">
                <div className="blog-categores">
                  <ul>
                    <li>
                      <Link to="#">Ui design, </Link>
                    </li>
                    <li>
                      <Link to="#">Marketing </Link>
                    </li>
                  </ul>
                </div>
                <div className="blog-social">
                  <ul>
                    <li>
                      <span>Share Post:</span>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-facebook-f"></i>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-twitter"></i>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <i className="fa fa-linkedin"></i>{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="blog-details-content pt-50">
              <p>
                I was instantly drawn into Adam’s work, the moment I accessed
                his website. His minimal style, full of light and natural
                beauty, leaves you mesmerized. Yet his words, his kindness and
                rich personality is what convinced me to contact him. He didn’t
                just deliver a wonderful experience and beautiful portrait
                gallery. He inspired me to consider a new lifestyle and alter
                some of my habits. A truly impactful person, work with him!
              </p>
              <p>
                I was instantly drawn into Adam’s work, the moment I accessed
                his website. His minimal style, full of light and natural
                beauty, leaves you mesmerized. Yet his words, his kindness and
                rich personality is what convinced me to contact him. He didn’t
                just deliver a wonderful experience and beautiful portrait
                gallery. He inspired me to consider a new lifestyle and alter
                some of my habits. A truly impactful person, work with him!
              </p>
              <div className="row mt-20">
                <div className="col-lg-6">
                  <div className="blog-details-thumb mt-30">
                    <img src="assets/images/blog-thumb-1.jpg" alt="" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="blog-details-thumb mt-30">
                    <img src="assets/images/blog-thumb-2.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="section-title pt-45">
                <h3 className="title">A better looking approach</h3>
                <p>
                  I was instantly drawn into Adam’s work, the moment I accessed
                  his website. His minimal style, full of light and natural
                  beauty, leaves you mesmerized. Yet his words, his kindness and
                  rich personality is what convinced me to contact him. He
                  didn’t just deliver a wonderful experience and beautiful
                  portrait gallery. He inspired me to consider a new lifestyle
                  and alter some of my habits. A truly impactful person, work
                  with him!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;

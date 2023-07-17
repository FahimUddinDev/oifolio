import { Link } from "react-router-dom";

function BlogHighlight() {
  return (
    <div className="blog-highlight-area ">
      <div className="container custom-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="blog-highlight-box">
              <div className="row">
                <div className="col-lg-6">
                  <div className="blog-highlight-thumb">
                    <img src="assets/images/blog-highlight-thumb.jpg" alt="" />
                    <div className="blog-highlight-overlay d-flex align-items-end">
                      <div className="blog-categories">
                        <ul>
                          <li>
                            <Link to="#">Ui design, </Link>
                          </li>
                          <li>
                            <Link to="#">Marketing </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="blog-highlight-content">
                    <h3 className="title">
                      Six Cover Letter Greetings for Every Situation
                    </h3>
                    <p>
                      I was instantly drawn into Adam’s work, the moment I
                      accessed his website. His minimal style, full of light and
                      natural beauty, leaves you mesmerized. Yet his words, his
                      kindness and rich personality is what convinced me
                    </p>
                    <div className="blog-meta">
                      <div className="admin">
                        <Link to="#" tabIndex="-1">
                          By <span>Adame Doe</span>
                        </Link>
                      </div>
                      <div className="date">
                        <p>October 20, 2020</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogHighlight;

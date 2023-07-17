function Topbar() {
  return (
    <div className="header-topbar">
      <div className="container custom-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header-topbar-item d-flex justify-content-between align-items-center">
              <div className="info">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-phone"></i> 504-882-0554
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-envelope"></i> 504-882-0554
                    </a>
                  </li>
                </ul>
              </div>
              <div className="social">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;

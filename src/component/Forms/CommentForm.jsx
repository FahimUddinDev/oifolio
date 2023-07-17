function CommentForm() {
  return (
    <div className="blog-form-area">
      <div className="container custom-container">
        <div className="row">
          <div className="col-lg-9">
            <div className="blog-form-title">
              <h4 className="title">Leave a Reply</h4>
            </div>
            <div className="blog-form-box">
              <div className="row">
                <div className="col-lg-12">
                  <div className="input-box mt-20">
                    <textarea name="#" id="#" cols="30" rows="10"></textarea>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="input-box mt-20">
                    <input type="Email" placeholder="Email" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="input-box mt-20">
                    <input type="text" placeholder="Name" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="input-box mt-20">
                    <input type="text" placeholder="Website" />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="input-box mt-25">
                    <button className="main-btn" type="submit">
                      Send
                    </button>
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

export default CommentForm;

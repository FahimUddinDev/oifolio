import ProtoTypes from "prop-types";

function BlogComment({ comments }) {
  return (
    <section className="blog-comment-area">
      <div className="container custom-container">
        <div className="row">
          <div className="col-lg-9">
            <div className="blog-comment-title">
              <h4 className="title">Comment</h4>
            </div>
            <div className="blog-comment-box">
              {comments?.map((comment, index) => (
                <div key={comment.id}>
                  <div
                    className={`blog-comment-box-item ${
                      index === 0 ? "" : "mt-25"
                    } `}
                  >
                    <div className="blog-comment-user d-block d-md-flex justify-content-between align-items-center">
                      <div className="user">
                        <img src={comment.authorImg} alt="" />
                        <span>{comment.authorName}</span>
                      </div>
                      <div className="blog-time">
                        <span>{comment.date}</span>
                      </div>
                    </div>
                    <div className="blog-comment-content bg-white mt-20">
                      <p>{comment.desc}</p>
                    </div>
                  </div>
                  {comment.replies && (
                    <div className="blog-comment-sub">
                      {comment.replies.map((reply) => (
                        <div
                          className="blog-comment-box-item mt-25"
                          key={reply.id}
                        >
                          <div className="blog-comment-user d-block d-md-flex justify-content-between align-items-center">
                            <div className="user">
                              <img src={reply.authorImg} alt="" />
                              <span>{reply.authorName}</span>
                            </div>
                            <div className="blog-time">
                              <span>{reply.date}</span>
                            </div>
                          </div>
                          <div className="blog-comment-content bg-white mt-20">
                            <p>{reply.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
BlogComment.propTypes = {
  comments: ProtoTypes.array,
};

export default BlogComment;

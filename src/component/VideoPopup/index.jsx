import ProtoTypes from "prop-types";

function VideoPopup({ player, setPlayer }) {
  return (
    player && (
      <div>
        <div className="mfp-bg mfp-ready"></div>
        <div
          className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
          tabIndex="-1"
          style={{ overflow: "hidden auto" }}
        >
          <div
            className="mfp-container mfp-s-ready mfp-iframe-holder"
            name="overlay"
            onClick={(e) =>
              e.target.className ===
                "mfp-container mfp-s-ready mfp-iframe-holder" &&
              setPlayer(false)
            }
          >
            <div className="mfp-content">
              <div className="mfp-iframe-scaler">
                <button
                  title="Close (Esc)"
                  type="button"
                  className="mfp-close"
                  onClick={() => setPlayer(false)}
                >
                  ×
                </button>
                <iframe
                  className="mfp-iframe"
                  src="//www.youtube.com/embed/NL7BIi5j7EM?autoplay=1"
                  frameBorder="0"
                  allowfullscreen=""
                ></iframe>
              </div>
            </div>
            <div className="mfp-preloader">Loading...</div>
          </div>
        </div>
      </div>
    )
  );
}
VideoPopup.propTypes = {
  player: ProtoTypes.bool,
  setPlayer: ProtoTypes.func,
};

export default VideoPopup;

import { useState } from "react";
import VideoPopup from "../VideoPopup";

function Play() {
  const [player, setPlayer] = useState(false);
  return (
    <>
      <VideoPopup player={player} setPlayer={setPlayer} />
      <div className="play-area">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-lg-12">
              <div className="play-thumb">
                <div className="bg-image"></div>
                <div className="play-btn">
                  <a className="video-popup" onClick={() => setPlayer(true)}>
                    <i className="fa fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Play;

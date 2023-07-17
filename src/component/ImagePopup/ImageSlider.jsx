import ProtoType from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { useCallback, useRef } from "react";

function ImageSlider({ images, active, close }) {
  const swiperRef = useRef(null);

  const prevSlide = useCallback(() => {
    swiperRef.current?.swiper.slidePrev();
  }, [swiperRef]);

  const nextSlide = useCallback(() => {
    swiperRef.current?.swiper.slideNext();
  }, [swiperRef]);
  return (
    active && (
      <div>
        <div
          className="off_canvars_overlay active"
          style={{ opacity: "0.9" }}
        ></div>
        <div
          style={{
            zIndex: "99999",
            position: "fixed",
            height: "100%",
            width: "100%",
            top: "0",
            left: "0",
            display: "flex",
          }}
        >
          <button
            title="Previous (Left arrow key)"
            type="button"
            className="mfp-arrow mfp-arrow-left mfp-prevent-close"
            onClick={prevSlide}
          ></button>
          <Swiper
            ref={swiperRef}
            loop
            spaceBetween={30}
            className="mySwiper"
            initialSlide={active - 1}
          >
            {/* Single Slider item  */}

            {images?.map((image, index) => (
              <SwiperSlide key={image}>
                <div
                  style={{
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  className="off"
                  onClick={(e) => e.target.className === "off" && close()}
                >
                  <div className="mfp-content">
                    <div className="mfp-figure">
                      <button
                        title="Close (Esc)"
                        type="button"
                        className="mfp-close"
                        onClick={close}
                      >
                        ×
                      </button>
                      <figure>
                        <img className="mfp-img" alt="portfolio" src={image} />
                        <figcaption>
                          <div className="mfp-bottom-bar">
                            <div className="mfp-title"></div>
                            <div className="mfp-counter">
                              {index + 1} of {images?.length}
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            title="Next (Right arrow key)"
            type="button"
            className="mfp-arrow mfp-arrow-right mfp-prevent-close"
            onClick={nextSlide}
          ></button>
        </div>
      </div>
    )
  );
}

ImageSlider.propTypes = {
  images: ProtoType.array,
  active: ProtoType.bool,
  close: ProtoType.func,
};

export default ImageSlider;

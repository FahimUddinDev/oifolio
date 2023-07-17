import ProtoTypes from "prop-types";
import { useCallback, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper/modules";

export default function Testimonials({ className, nextBtn, prevBtn }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const swiperRef = useRef(null);

  const prevSlide = useCallback(() => {
    swiperRef.current?.swiper.slidePrev();
  }, [swiperRef]);

  const nextSlide = useCallback(() => {
    swiperRef.current?.swiper.slideNext();
  }, [swiperRef]);

  return (
    <>
      <section className={`testimonial-area ${className ? className : ""}`}>
        <div className="container custom-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h3 className="title">Testimonials</h3>
              </div>
              <div></div>
              <div
                className="testimonial-slider"
                style={{
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                <div
                  title="Previous (Left arrow key)"
                  onClick={prevSlide}
                  className={prevBtn ? prevBtn : "prevBtn"}
                >
                  <div>prev</div>
                </div>
                <Swiper
                  ref={swiperRef}
                  style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                  }}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  speed={2000}
                  loop={true}
                  spaceBetween={10}
                  thumbs={{
                    swiper:
                      thumbsSwiper && !thumbsSwiper.destroyed
                        ? thumbsSwiper
                        : null,
                  }}
                  modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                  className="mySwiper2"
                >
                  <SwiperSlide>
                    <div
                      className="testimonial-content text-center"
                      style={{ padding: " 10px", margin: " 0px" }}
                    >
                      <p>
                        We help organisations transform their impact. We
                        identify opportunities you can uniquely own by analysing
                        your business, your market, and cultural shifts in the
                        world. We define your north star: why you exist, what
                        makes you unique and what you’re here to do in a
                        compelling and differentiating way.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="testimonial-content text-center"
                      style={{ padding: " 20px", margin: " 0px" }}
                    >
                      <p>
                        We help organisations transform their impact. We
                        identify opportunities you can uniquely own by analysing
                        your business, your market, and cultural shifts in the
                        world. We define your north star: why you exist, what
                        makes you unique and what you’re here to do in a
                        compelling and differentiating way.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="testimonial-content text-center"
                      style={{ padding: " 20px", margin: " 0px" }}
                    >
                      <p>
                        We help organisations transform their impact. We
                        identify opportunities you can uniquely own by analysing
                        your business, your market, and cultural shifts in the
                        world. We define your north star: why you exist, what
                        makes you unique and what you’re here to do in a
                        compelling and differentiating way.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="testimonial-content text-center"
                      style={{ padding: " 20px", margin: " 0px" }}
                    >
                      <p>
                        We help organisations transform their impact. We
                        identify opportunities you can uniquely own by analysing
                        your business, your market, and cultural shifts in the
                        world. We define your north star: why you exist, what
                        makes you unique and what you’re here to do in a
                        compelling and differentiating way.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="testimonial-content text-center"
                      style={{ padding: " 20px", margin: " 0px" }}
                    >
                      <p>
                        We help organisations transform their impact. We
                        identify opportunities you can uniquely own by analysing
                        your business, your market, and cultural shifts in the
                        world. We define your north star: why you exist, what
                        makes you unique and what you’re here to do in a
                        compelling and differentiating way.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      className="testimonial-content text-center"
                      style={{ padding: " 20px", margin: " 0px" }}
                    >
                      <p>
                        We help organisations transform their impact. We
                        identify opportunities you can uniquely own by analysing
                        your business, your market, and cultural shifts in the
                        world. We define your north star: why you exist, what
                        makes you unique and what you’re here to do in a
                        compelling and differentiating way.
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div
                  title="Previous (Left arrow key)"
                  onClick={nextSlide}
                  className={`${nextBtn ? nextBtn : "prevBtn nextBtn"}`}
                >
                  <div>Next</div>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    maxWidth: "300px",
                  }}
                >
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={3}
                    centeredSlides={true}
                    freeMode={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    speed={2000}
                    loop={true}
                    modules={[FreeMode, Navigation, Thumbs, Autoplay]}
                    className="mySwiper mySwiper4"
                  >
                    <SwiperSlide>
                      <div className="item text-center">
                        <img src="assets/images/user-1.png" alt="" />
                        <h5 className="title">Nero smith</h5>
                        <span>CEO</span>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="item text-center">
                        <img src="assets/images/user-1.png" alt="" />
                        <h5 className="title">Nero smith</h5>
                        <span>CEO</span>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="item text-center">
                        <img src="assets/images/user-1.png" alt="" />
                        <h5 className="title">Nero smith</h5>
                        <span>CEO</span>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="item text-center">
                        <img src="assets/images/user-1.png" alt="" />
                        <h5 className="title">Nero smith</h5>
                        <span>CEO</span>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="item text-center">
                        <img src="assets/images/user-1.png" alt="" />
                        <h5 className="title">Nero smith</h5>
                        <span>CEO</span>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="item text-center">
                        <img src="assets/images/user-1.png" alt="" />
                        <h5 className="title">Nero smith</h5>
                        <span>CEO</span>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
              {/* </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Testimonials.propTypes = {
  className: ProtoTypes.string,
  nextBtn: ProtoTypes.string,
  prevBtn: ProtoTypes.string,
};

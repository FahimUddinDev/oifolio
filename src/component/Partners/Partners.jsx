import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
function Partners({ className }) {
  return (
    <section className={`partners-area ${className ? className : ""}`}>
      <div className="container custom-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="partners-box">
              <div className="row">
                <div className="col-lg-5">
                  <h2 className="title">Lucky Partners!</h2>
                </div>
                <div className="col-lg-7">
                  <p>
                    We’ve been lucky to collaborate with a long list of
                    customers, located in and out of the country. Thanks to them
                    we have grown as
                  </p>
                </div>
              </div>
              <div className="row brand-active mt-50">
                <Swiper
                  loop={true}
                  spaceBetween={10}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  speed={2000}
                  modules={[Autoplay]}
                  breakpoints={{
                    640: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 5,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 5,
                      spaceBetween: 50,
                    },
                  }}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div className="partners-item text-center">
                      <Link to="#">
                        <img
                          src="assets/images/partners-1.png"
                          alt="partners"
                        />
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="partners-item text-center">
                      <Link to="#">
                        <img
                          src="assets/images/partners-2.png"
                          alt="partners"
                        />
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="partners-item text-center">
                      <Link to="#">
                        <img
                          src="assets/images/partners-3.png"
                          alt="partners"
                        />
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="partners-item text-center">
                      <Link to="#">
                        <img
                          src="assets/images/partners-4.png"
                          alt="partners"
                        />
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="partners-item text-center">
                      <Link to="#">
                        <img
                          src="assets/images/partners-2.png"
                          alt="partners"
                        />
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="partners-item text-center">
                      <Link to="#">
                        <img
                          src="assets/images/partners-3.png"
                          alt="partners"
                        />
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="partners-item text-center">
                      <Link to="#">
                        <img
                          src="assets/images/partners-3.png"
                          alt="partners"
                        />
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="partners-item text-center">
                      <Link to="#">
                        <img
                          src="assets/images/partners-4.png"
                          alt="partners"
                        />
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="partners-item text-center">
                      <Link to="#">
                        <img
                          src="assets/images/partners-2.png"
                          alt="partners"
                        />
                      </Link>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="partners-item text-center">
                      <Link to="#">
                        <img
                          src="assets/images/partners-3.png"
                          alt="partners"
                        />
                      </Link>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
Partners.propTypes = {
  className: ProtoTypes.string,
};

export default Partners;

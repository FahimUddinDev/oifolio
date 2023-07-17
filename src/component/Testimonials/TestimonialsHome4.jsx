import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function TestimonialsHome4() {
  return (
    <section className="testimonial-4-area">
      <div className="bg-image"></div>
      <div className="container custom-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title">
              <h3 className="title">Customer reviews are always valuable.</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="testimonial-slider-2">
              <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                speed={2000}
                modules={[Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="testimonial-4-content">
                    <p>
                      After using this Studio our business skyrocketed! Their
                      amazing team has helped empower our marketing team to
                      build faster and better. We’re super pleased with Webflow
                      and it’s truely streamlined our operations.
                    </p>
                    <div className="client-user">
                      <h5 className="title">Ayoub fennouni</h5>
                      <span>Creabik, CEO</span>
                    </div>
                    <div className="quote-icon">
                      <img src="assets/images/icon/quote-icon%20.svg" alt="" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testimonial-4-content">
                    <p>
                      After using this Studio our business skyrocketed! Their
                      amazing team has helped empower our marketing team to
                      build faster and better. We’re super pleased with Webflow
                      and it’s truely streamlined our operations.
                    </p>
                    <div className="client-user">
                      <h5 className="title">Ayoub fennouni</h5>
                      <span>Creabik, CEO</span>
                    </div>
                    <div className="quote-icon">
                      <img src="assets/images/icon/quote-icon%20.svg" alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsHome4;

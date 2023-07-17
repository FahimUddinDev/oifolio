import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function AwardHome4() {
  return (
    <section className="awards-area awards-4-area">
      <div className="container custom-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title">
              <h3 className="title">Awards & Prizes</h3>
              <p>
                We’re constantly refining our product. Adding new features.
                Working to help your business grow.
              </p>
            </div>
          </div>
          <div className="col-lg-12"></div>
        </div>
        <div className="row no-gutters awards-active">
          <Swiper
            slidesPerView={1}
            // loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop
            speed={3000}
            modules={[Autoplay]}
            className="mySwiper2"
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1224: {
                slidesPerView: 4,
              },
              1300: {
                slidesPerView: 5,
              },
            }}
          >
            <SwiperSlide>
              <div className="awards-item mt-30">
                <div className="thumb">
                  <img src="assets/images/icon/awards-1.png" alt="awards" />
                </div>
                <h5>CSS Design Award</h5>
                <span>Site of the day</span>
                <h2 className="title">4</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="awards-item black mt-30">
                <div className="thumb">
                  <img src="assets/images/icon/awards-2.png" alt="awards" />
                </div>
                <h5>CSS Design Award</h5>
                <span>Site of the day</span>
                <h2 className="title">9</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="awards-item mt-30">
                <div className="thumb">
                  <img src="assets/images/icon/awards-3.png" alt="awards" />
                </div>
                <h5>CSS Design Award</h5>
                <span>Site of the day</span>
                <h2 className="title">2</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="awards-item black mt-30">
                <div className="thumb">
                  <img src="assets/images/icon/awards-1.png" alt="awards" />
                </div>
                <h5>CSS Design Award</h5>
                <span>Site of the day</span>
                <h2 className="title">3</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="awards-item mt-30">
                <div className="thumb">
                  <img src="assets/images/icon/awards-2.png" alt="awards" />
                </div>
                <h5>CSS Design Award</h5>
                <span>Site of the day</span>
                <h2 className="title">23</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="awards-item black mt-30">
                <div className="thumb">
                  <img src="assets/images/icon/awards-3.png" alt="awards" />
                </div>
                <h5>CSS Design Award</h5>
                <span>Site of the day</span>
                <h2 className="title">4</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="awards-item mt-30">
                <div className="thumb">
                  <img src="assets/images/icon/awards-3.png" alt="awards" />
                </div>
                <h5>CSS Design Award</h5>
                <span>Site of the day</span>
                <h2 className="title">2</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="awards-item black mt-30">
                <div className="thumb">
                  <img src="assets/images/icon/awards-1.png" alt="awards" />
                </div>
                <h5>CSS Design Award</h5>
                <span>Site of the day</span>
                <h2 className="title">3</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="awards-item mt-30">
                <div className="thumb">
                  <img src="assets/images/icon/awards-2.png" alt="awards" />
                </div>
                <h5>CSS Design Award</h5>
                <span>Site of the day</span>
                <h2 className="title">23</h2>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="awards-item black mt-30">
                <div className="thumb">
                  <img src="assets/images/icon/awards-1.png" alt="awards" />
                </div>
                <h5>CSS Design Award</h5>
                <span>Site of the day</span>
                <h2 className="title">3</h2>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default AwardHome4;

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AwardCard from "../Cards/AwardCard";

function Awards() {
  return (
    <section className="awards-area">
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
                spaceBetween: 5,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 5,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 5,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <AwardCard
                img="assets/images/icon/awards-1.png"
                title="CSS Design Award"
                desc="Site of the day"
                num={4}
              />
            </SwiperSlide>
            <SwiperSlide>
              <AwardCard
                img="assets/images/icon/awards-2.png"
                title="CSS Design Award"
                desc="Site of the day"
                num={9}
                className="black"
              />
            </SwiperSlide>
            <SwiperSlide>
              <AwardCard
                img="assets/images/icon/awards-3.png"
                title="CSS Design Award"
                desc="Site of the day"
                num={2}
              />
            </SwiperSlide>
            <SwiperSlide>
              <AwardCard
                img="assets/images/icon/awards-1.png"
                title="CSS Design Award"
                desc="Site of the day"
                num={3}
                className="black"
              />
            </SwiperSlide>
            <SwiperSlide>
              <AwardCard
                img="assets/images/icon/awards-2.png"
                title="CSS Design Award"
                desc="Site of the day"
                num={23}
              />
            </SwiperSlide>
            <SwiperSlide>
              <AwardCard
                img="assets/images/icon/awards-3.png"
                title="CSS Design Award"
                desc="Site of the day"
                num={4}
                className="black"
              />
            </SwiperSlide>
            <SwiperSlide>
              <AwardCard
                img="assets/images/icon/awards-3.png"
                title="CSS Design Award"
                desc="Site of the day"
                num={2}
              />
            </SwiperSlide>
            <SwiperSlide>
              <AwardCard
                img="assets/images/icon/awards-1.png"
                title="CSS Design Award"
                desc="Site of the day"
                num={3}
                className="black"
              />
            </SwiperSlide>
            <SwiperSlide>
              <AwardCard
                img="assets/images/icon/awards-2.png"
                title="CSS Design Award"
                desc="Site of the day"
                num={23}
              />
            </SwiperSlide>
            <SwiperSlide>
              <AwardCard
                img="assets/images/icon/awards-1.png"
                title="CSS Design Award"
                desc="Site of the day"
                num={3}
                className="black"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Awards;

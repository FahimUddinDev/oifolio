import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

function RelatedProjects() {
  return (
    <section className="related-project-area sm-pb-20">
      <div className="container custom-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="related-project-box">
              <div className="section-title">
                <h3 className="title">Related Projects</h3>
              </div>
              <div className="row related-project-slide">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={10}
                  pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 40,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 50,
                    },
                  }}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  speed={2000}
                  loop={true}
                  modules={[Autoplay, Pagination]}
                  className="mySwiper mySwiper3"
                >
                  <SwiperSlide>
                    <div className="related-project-thum relatedProjects ">
                      <a href="#">
                        <img
                          src="assets/images/portfolio/related-project-1.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="related-project-thumb relatedProjects">
                      <a href="#">
                        <img
                          src="assets/images/portfolio/related-project-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="related-project-thumb relatedProjects">
                      <a href="#">
                        <img
                          src="assets/images/portfolio/related-project-3.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="related-project-thumb relatedProjects">
                      <a href="#">
                        <img
                          src="assets/images/portfolio/related-project-2.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="related-project-thumb relatedProjects">
                      <a href="#">
                        <img
                          src="assets/images/portfolio/related-project-1.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="related-project-thumb relatedProjects">
                      <a href="#">
                        <img
                          src="assets/images/portfolio/related-project-3.jpg"
                          alt=""
                        />
                      </a>
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

export default RelatedProjects;

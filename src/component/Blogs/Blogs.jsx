import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import blogs from "../../data/blogs";
import BlogCard from "../Cards/BlogCard";

function Blogs() {
  return (
    <section className="blog-area " style={{ paddingBottom: "30px" }}>
      <div className="container custom-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h3 className="title">Related Articles</h3>
            </div>
          </div>
        </div>
        <div className="row blog-active" style={{ padding: "15px" }}>
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
            loopedSlides={3}
            loop
            speed={2000}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            {blogs?.map((blog) => (
              <SwiperSlide key={blog.id}>
                <BlogCard blog={blog} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Blogs;

{
  /* <div className="col-lg-4"></div> */
}

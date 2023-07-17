import ImgCard from "../Cards/ImgCard";

function Gallery() {
  return (
    <section className="portfolio-area">
      <div className="container-fluid p-0">
        <div className="row no-gutters">
          <ImgCard
            img="assets/images/portfolio-1.jpg"
            title="Fast Matching With Content Delivery."
          />
          <ImgCard
            img="assets/images/portfolio-2.jpg"
            title="Fast Matching With Content Delivery."
          />
          <ImgCard
            img="assets/images/portfolio-3.jpg"
            title="Fast Matching With Content Delivery."
          />
          <ImgCard
            img="assets/images/portfolio-4.jpg"
            title="Fast Matching With Content Delivery."
          />
          <ImgCard
            img="assets/images/portfolio-5.jpg"
            title="Fast Matching With Content Delivery."
          />
          <ImgCard
            img="assets/images/portfolio-6.jpg"
            title="Fast Matching With Content Delivery."
          />
        </div>
      </div>
    </section>
  );
}

export default Gallery;

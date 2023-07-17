import PortfolioCardV3 from "../Cards/PortfolioCardV3";

function PortfolioGridV2() {
  return (
    <section className="portfolio-area portfolio-3-style-area">
      <div className="container-fluid p-0">
        <div className="row no-gutters">
          <PortfolioCardV3
            img="assets/images/portfolio-1.jpg"
            title="Fast Matching With Content Delivery."
          />
          <PortfolioCardV3
            img="assets/images/portfolio-2.jpg"
            title="Fast Matching With Content Delivery."
          />
          <PortfolioCardV3
            img="assets/images/portfolio-3.jpg"
            title="Fast Matching With Content Delivery."
          />
          <PortfolioCardV3
            img="assets/images/portfolio-4.jpg"
            title="Fast Matching With Content Delivery."
          />
          <PortfolioCardV3
            img="assets/images/portfolio-5.jpg"
            title="Fast Matching With Content Delivery."
          />
          <PortfolioCardV3
            img="assets/images/portfolio-6.jpg"
            title="Fast Matching With Content Delivery."
          />
          <PortfolioCardV3
            img="assets/images/portfolio-7.jpg"
            title="Fast Matching With Content Delivery."
          />
          <PortfolioCardV3
            img="assets/images/portfolio-8.jpg"
            title="Fast Matching With Content Delivery."
          />
          <PortfolioCardV3
            img="assets/images/portfolio-9.jpg"
            title="Fast Matching With Content Delivery."
          />
        </div>
      </div>
    </section>
  );
}

export default PortfolioGridV2;

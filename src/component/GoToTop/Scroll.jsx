function Scroll() {
  let pageHeight = window.innerHeight;
  const scrollToTop = () => {
    window.scrollTo({
      top: pageHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className="hero-scroll" onClick={scrollToTop}>
      <a data-scroll-nav="1" href="#work">
        <span>S</span>
        <span>C</span>
        <span>R</span>
        <span>O</span>
        <span>L</span>
        <span>L</span>
      </a>
    </div>
  );
}

export default Scroll;

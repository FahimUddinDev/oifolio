import useWindowPosition from "../../hooks/useWindowPosition";

function GotoTop() {
  const scrollPosition = useWindowPosition();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      id="back-to-top"
      onClick={scrollToTop}
      className="back-to-top"
      style={{
        bottom: "20px",
        opacity: scrollPosition > 600 ? "1" : "0",
        visibility: "visible",
        display: "block",
      }}
    >
      <i className="fa fa-arrow-up"></i>
    </div>
  );
}

export default GotoTop;

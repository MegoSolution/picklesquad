import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [windowHeight, setWindowHeight] = useState(0);

  const goToTopHandler = () => {
    window.scroll({
      top: 0,
      left: 0,
    });
  };

  const goToTop = () => {
    if (window !== undefined) {
      let height = window.scrollY;
      setWindowHeight(height);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", goToTop);
    return () => {
      window.removeEventListener("scroll", goToTop);
    };
  }, []);

  return (
    <button
      type={"button"}
      className={`scrollToTop ${windowHeight > 200 && "active"}`}
      onClick={goToTopHandler}
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
};

export default ScrollToTop;

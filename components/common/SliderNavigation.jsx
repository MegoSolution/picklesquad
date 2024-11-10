const SliderNavigation = ({ sliderRef, cls = "" }) => {
  return (
    <div className={`slider-navigation ${cls}`}>
      <button
        className="next-training cmn-button cmn-button--secondary"
        onClick={() => sliderRef.current.slickPrev()}
      >
        <i className="fa-solid fa-angle-left"></i>
      </button>
      <button
        className="prev-training cmn-button cmn-button--secondary"
        onClick={() => sliderRef.current.slickNext()}
      >
        <i className="fa-solid fa-angle-right"></i>
      </button>
    </div>
  );
};

export default SliderNavigation;

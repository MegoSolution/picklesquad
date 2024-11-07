import { useState } from "react";
import "react-range-slider-input/dist/style.css";

const LeftSide = () => {
  const [value, setValue] = useState([200, 700]);

  return (
    <div className="col-12 col-xl-4 section__col">
      <div className="shop__sidebar">
        <h5>User Name</h5>
      </div>
    </div>
  );
};

export default LeftSide;

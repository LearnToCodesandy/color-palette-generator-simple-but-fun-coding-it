import { useState, useEffect } from "react";
const colours_temp = require("nice-color-palettes");

const Section = ({ color, colors, setColors, index }) => {
  const [colorVal, setColorVal] = useState("");
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setColorVal(color);
  }, []);

  const handleGenerateColor = () => {
    let index1 = Math.floor(Math.random() * 5);
    let index2 = Math.floor(Math.random() * 100);
    setColorVal(colours_temp[index2][index1]);
    colors[index] = colorVal;
    setColors(colors);
  };

  const handleLockColor = () => {
    setDisabled(!disabled);
  };

  return (
    <div className="container d-flex flex-row align-items-center justify-content-around flex-wrap-reverse">
      <div className="block-div">{colorVal}</div>
      <div className="btn-group">
        <span className="btn btn-danger" onClick={handleLockColor}>
          Lock
        </span>
        <span
          className={disabled ? "btn btn-primary disabled" : "btn btn-primary"}
          onClick={handleGenerateColor}
        >
          Generate
        </span>
      </div>
      <div
        className="square"
        style={{
          backgroundColor: colorVal
        }}
      ></div>
    </div>
  );
};

export default Section;

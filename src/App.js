import { useState, useEffect } from "react";
import SectionsContainer from "./components/SectionsContainer";
import "./styles.css";
const colours = require("nice-color-palettes");

export default function App() {
  const [colors, setColors] = useState([]);
  const [codeToggle, setCodeToggle] = useState(false);
  useEffect(() => {
    handleColors();
  }, []);

  const handleColors = () => {
    let randomIndex = Math.floor(Math.random() * colours.length);
    setColors(colours[randomIndex]);
  };

  return (
    <div className="container my-3 py-3 ">
      <h3>Color Palette Generator</h3>
      <div className="btn-group">
        <button className="btn btn-success my-3" onClick={handleColors}>
          Generate Initial Palette
        </button>
        <button
          className="btn btn-warning my-3"
          onClick={() => {
            setCodeToggle(!codeToggle);
          }}
        >
          Toggle CSS Code card!
        </button>
      </div>
      <SectionsContainer colors={colors} setColors={setColors} />
      <div className={codeToggle ? "container my-3 py-3" : "d-none"}>
        <h3>Color Palette</h3>
        <hr />
        <code>
          {colors.map((color, index) => (
            <pre>
              --color-{index + 1} : {color};
            </pre>
          ))}
        </code>
      </div>
    </div>
  );
}

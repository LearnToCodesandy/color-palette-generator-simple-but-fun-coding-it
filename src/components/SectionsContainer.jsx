import Section from "./Section";

const SectionsContainer = ({ colors, setColors }) => {
  return (
    <div className="container">
      <ul className="list-group">
        {colors.map((color, index) => (
          <li className="list-group-item" key={color}>
            <Section
              color={color}
              setColors={setColors}
              colors={colors}
              index={index}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SectionsContainer;

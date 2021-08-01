import React from "react";
import Aux from "./Auxliliary/Auxiliary";
import "./App.css";

const Emoji = (props) => {
  let text = ``;
  let { x, y, z } = props;
  if ((x === y) & (y === z)) {
    text = <p style={{ color: "Blue" }}> They are Matching </p>;
  } else {
    text = <p style={{ color: "red" }}> They are not Matching </p>;
  }

  return (
    <Aux>
      <div className="div4">
        <span>
          {x} {y} {z}
        </span>
        <span>{text}</span>
      </div>
    </Aux>
  );
};

export default Emoji;

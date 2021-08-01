import React  from "react";
import Aux from "./Auxliliary/Auxiliary";
import Emoji from "./Emoji";

const Card = (props) => {


  return (
    <Aux>
      <div className="div1">
        <div className="div2">
          <h1>{props.head1}</h1>
        </div>

        <div className="div3">
          <Emoji x="😆" y="😆" z="😆" />
          <Emoji x="😆🤑" y="😜" z="😆🤑😆" />
          <Emoji x="😆" y="🥵 🥵 🥵" z="😆" />
          <Emoji x="📓" y="📓" z="📓" />
        </div>

       
      </div>
    </Aux>
  );
};



export default Card;

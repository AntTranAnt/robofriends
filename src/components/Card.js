import React from "react";
import "./Card.css";

const Card = (props) => {
  // return can only return 1 thing, so everything must be inside a div
  //const {name, email id} = props to destructure
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2">
      <img alt="robots" src={"https://robohash.org/" + props.id} />
      <div>
        <h2>{props.name} </h2>
        <p>{props.email}</p>
      </div>
    </div>
  );
};

export default Card;

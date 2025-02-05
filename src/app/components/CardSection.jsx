import React from "react";
import Card from "./Card";

import { data } from "./coffeedata";

export default function CardSection() {
  function createCard(props) {
    return (
      <div key={props.id}>
        <Card
          // key={props.id}
          name={props.name}
          picture={props.picture}
          description={props.description}
          prices={props.prices}
        />
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-center pt-10 font-inconsolata tracking-tight text-4xl">
        Featured Drinks
      </h1>
      <div className="pt-10 pb-10 mt-10 flex flex-wrap justify-evenly bg-customGreen gap-6">
        {data.map(createCard)}
      </div>
    </div>
  );
}

import React from "react";
import Card from "./Card";

export default function Cards() {
  return (
    <div className="cardsArea container">
      <div className="columns mt-5 is-8 is-variable">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

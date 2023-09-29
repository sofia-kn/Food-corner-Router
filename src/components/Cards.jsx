import React, { useState } from "react";
import {menuData} from "./../data";
import Card from "./Card";
import "./Cards.css";

function Cards() {
  const [cards, setCards] = useState(menuData);

  return (
    <div className="container">
      <div className="cards__wrapper">
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}

export default Cards;

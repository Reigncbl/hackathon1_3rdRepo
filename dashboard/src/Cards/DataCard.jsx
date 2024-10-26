import React from "react";
import { cardsData } from "../Data/Data";

import Card from "./Card";

const Cards = () => {
  return (
    <div className="flex flex-row justify-evenly">
      {cardsData.map((card, id) => {
        return (
          <div key={id}>
            <Card
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
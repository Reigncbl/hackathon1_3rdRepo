import React from "react";
import { cardsDataMicro } from "../Data/Data";

import Card from "./Card";

const Cards = () => {
  return (
    <div className="flex flex-row justify-evenly">
      {cardsDataMicro.map((card, id) => {
        return (
          <div key={id}>
            <Card
              title={card.title}
              url={card.url}
              bg={card.color.backGround}
              value={card.value}
              png={card.png}
              percent={card.percent}

            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
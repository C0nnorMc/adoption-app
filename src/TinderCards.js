import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

const TinderCards = ({animal}) => {

  return (
    <div className="TinderCards_Container">
      {animal.map((animal) => (
        <TinderCard
          className="swipe"
          key={animal.name}
          preventSwipe={["up", "down"]}
        >
          <div
            style={{ backgroundImage: `url(${animal.url})` }}
            className="card"
          >
            <h3>{animal.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  );
      }

export default TinderCards;

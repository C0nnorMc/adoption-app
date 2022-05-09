import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

const TinderCards = ({animal}) => {

//  const animal =[ { name: "Dio",
//   url : "https://www.mypetzilla.co.uk/files/6114/7913/5836/English-Toy-Terrier.jpg",
//  },
//  {name: "Bill",
//   url: "https://fishsubsidy.org/wp-content/uploads/2020/01/Italian-greyhound.jpg"
// }]

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

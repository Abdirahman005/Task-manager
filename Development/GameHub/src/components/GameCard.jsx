import React from "react";

const GameCard = ({ image, title }) => {
  return (
    <div className="game-card">
      <img src={image} alt={title} />
      <p>{title}</p>
      <button>PLAY</button>
    </div>
  );
};

export default GameCard;

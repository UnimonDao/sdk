import React from "react";

export default function FarmCard() {
  const buyFarm = () => {
    alert("Farm purchased! (Smart contract integration needed)");
  };

  return (
    <div className="farm-card">
      <img src="/farm.png" alt="Farm" width="200"/>
      <h3>Starter Farm</h3>
      <button onClick={buyFarm}>Buy Farm</button>
    </div>
  );
}

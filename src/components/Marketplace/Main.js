import React from "react";
import Boxes from "./Boxes";

const Main = () => {
  return (
    <div className="main-marketplace">
      <button className="main-balance">Balance: 0 $HROM</button>
      <span className="main-title">Marketplace</span>
      <button className="main-wallet">Connect wallet</button>
      <Boxes />
    </div>
  );
};

export default Main;





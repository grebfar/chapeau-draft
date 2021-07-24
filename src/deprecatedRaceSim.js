import React, { useState } from "react";
import Button from "./components/Button";
import riderData from "./data/riderData";

function RaceSim() {
  const [winner, setWinner] = useState(0);
  const rider = riderData[winner].name;

  function generate() {
    setWinner((prevWinner) => Math.floor(Math.random() * riderData.length));
  }

  return (
    <div>
      <Button primary onClick={generate}>
        Simulate Race
      </Button>
      <h2>
        And the winner is: {winner} & {rider}
      </h2>
    </div>
  );
}

export default RaceSim;

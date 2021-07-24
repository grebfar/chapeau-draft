import React, { useState } from "react";
import Button from "./components/Button";
import cumRiderData from "./data/cumRiderData";
import RiderWins from "./RiderWins";

function RaceSim() {
  const [winner, setWinner] = useState(0);

  function rolldice() {
    setWinner((prevWinner) =>
      Math.floor(Math.random() * cumRiderData[cumRiderData.length - 1].cumform)
    );
  }

  return (
    <div>
      <Button primary onClick={rolldice}>
        Simulate Race
      </Button>
      <RiderWins winner={winner} />
    </div>
  );
}

export default RaceSim;

import cumRiderData from "./data/cumRiderData";

function RiderWins({ winner }) {
  function inOrder(array) {
    for (var i = 0; i < array.length; i++) {
      if (winner < array[i].cumform) return array[i].name;
    }
    return false;
  }
  console.log(inOrder(cumRiderData));

  return (
    <div>
      <h2>And the winner is: {inOrder(cumRiderData)}</h2>
    </div>
  );
}

export default RiderWins;

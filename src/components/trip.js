import "./trip.css";
import Tripdata from "./tripdata";
import Trip1 from "../assets/trip1.jpg";
import Trip2 from "../assets/Jordan.jpg";
import Trip3 from "../assets/Italy.jpg";
function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <div className="tripcard">
        <Tripdata
          image={Trip1}
          heading="Trip in Malyasia"
          text="Malaysia is a beautifully complex vacation destination, a land where ancient rainforests give way to multicultural city life. Capital city Kuala Lumpur is visually defined by the iconic Petronas Twin Towers, while in charming Melaka the vibe is more quaint and historical. "
        />
        <Tripdata
          image={Trip2}
          heading="Trip in Jordan"
          text="Jordan may be a relatively young state, but it is one that contains the hallmarks of many civilisations. From the ancient kingdoms of Moab, Gilead and Edom to Petra, the epicentre of the Nabatean dynasty, Jordan has been home to a vast array of cultures through its history.  "
        />
        <Tripdata
          image={Trip3}
          heading="Trip in Italy"
          text="Each city showcases its distinctive character and attractions with illustrious art collections and museums. Italy's natural diversity ranges from the breathtaking Amalfi Coast to the idyllic Tuscan countryside. The country offers opportunities for hiking, skiing, and savoring."
        />
      </div>
      <h2>
        Remainder: 17% Discount is going on for any booking upto the date
        29.11.2024
      </h2>
    </div>
  );
}
export default Trip;

import { Component } from "react";
import "./Destination.css";
import Iceland1 from "../assets/iceland1.jpg";
import Iceland2 from "../assets/Iceland2.jpeg";

class DestinationData extends Component {
  render() {
    return (
      <div className={this.props.ClassName}>
        <div className="dest-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="image">
          <img alt="img" src={this.props.img1} />

          <img alt="img" src={this.props.img2} />
        </div>
      </div>
    );
  }
}
export default DestinationData;

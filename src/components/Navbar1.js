import { Component } from "react";
import "./Navbar.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
class Navbar1 extends Component {
  state = { clicked: false };
  handleclick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Voyager</h1>
        <div className="menu-icons" onClick={this.handleclick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <button>Sign up</button>
        </ul>
      </nav>
    );
  }
}

export default Navbar1;

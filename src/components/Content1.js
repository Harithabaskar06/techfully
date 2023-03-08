import { Component } from "react";
import { MenuItems } from "./MenuItems";
import { React } from "react";

class Content1 extends Component {
  render() {
    return (
      <nav>
        <h1 className="navbar-logo">
          <i className="fa fa-ring"></i>
          Task Techfully
        </h1>
        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index} className="listSize">
                <a className={item.cName} href="/">
                  <i className={item.icon}></i>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>

        <i className="fa fa-"></i>

        <button className="logout">
          {" "}
          <i className="fa fa-sign-out"></i>Logout
        </button>
      </nav>
    );
  }
}

export default Content1;

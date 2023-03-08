import { Component } from "react";

import "./Project.css";
import Content1 from "./Content1";
import Content3 from "./Content3";
import Content4 from "./Content4";
import Content5 from "./Content5";

class Project extends Component {
  render() {
    return (
      <div className="block">
        <div className="content1">
          <Content1 />
        </div>
        <div className="content3">
          <Content3 />
        </div>
        <div className="content4">
          <Content4 />
        </div>
        <div className="content5">
          <Content5 />
        </div>
      </div>
    );
  }
}

export default Project;

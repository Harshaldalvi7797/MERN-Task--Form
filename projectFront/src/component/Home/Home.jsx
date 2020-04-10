import React, { Component } from "react";
import Navigation from "../Navigation/navigation";
import Habout from "./about.home";

class Home extends Component {
  render() {
    return (
      <div className="">
        <Navigation />
        <Habout />
      </div>
    );
  }
}
export default Home;

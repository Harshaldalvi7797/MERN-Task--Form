import React, { Component } from "react";

import "./App.css";
import { Route, Switch, Router } from "react-router-dom";
import Navigation from "./component/Navigation/navigation";

import { Nav } from "react-bootstrap";
import About from "./component/About/About";
import Home from "./component/Home/Home";
import Demo from "./component/Navigation/demo";
import Jobs from "./component/Jobs/jobs";
import Footer from "./component/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />{" "}
          <Route path="/about" exact component={About} />{" "}
          <Route path="/jobs" exact component={Jobs} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;

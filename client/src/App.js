import React, { Component } from "react";
import { Route, NavLink, HashRouter } from 'react-router-dom'
import Home from "./Home/home.jsx"
import Trips from "../Trips/trips.jsx"
import Activities from "../"

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>Travel Buddy</h1>
          <ul className="header">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/trips">Trips</NavLink>
            </li>
            <li>
              <NavLink to="/activities">Activities</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route path="/" component={Home} />
            <Route path="/trips" component={Trips} />
            <Route path="/activities" component={Activities} />
          </div>
        </div>
      </HashRouter>
    );
  }
}
export default App;

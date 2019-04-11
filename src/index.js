import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./assets/css/nucleo-icons.css";
import "./assets/scss/blk-design-system-react.scss?v=1.0.0";
import "./assets/demo/demo.css";

import Mail from "./views/Mail.jsx";
import Sound from "./views/Sound.jsx";
import Search from "./views/Search.jsx"


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/mail" render={props => <Mail {...props} /> } />
      <Route path="/soundboard" render={props => <Sound {...props} /> } />
      <Route path="/search" render={props => <Search {...props} /> } />
      <Redirect from="/" to="/mail" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);


import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import App from "../App";
import Favoritos from "../pages/favoritos";

function Routes() {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/favoritos">
            <Favoritos />
          </Route>
       
        <Link to="/favoritos">Favoritos</Link>
        </Switch>
      </>
    </Router>
  );
}

export default Routes;
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header, Home } from "./components";
import { Crew, Destination, Technology } from "./pages";

import "./App.scss";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/destination" exact>
            <Destination />
          </Route>
          <Route path="/crew" exact>
            <Crew />
          </Route>
          <Route path="/technology" exact>
            <Technology />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;

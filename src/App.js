import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components";
import { Crew, Destination, Technology } from "./pages";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <h1>Hello World</h1>
        <Switch>
          <Route path="/" exact></Route>
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

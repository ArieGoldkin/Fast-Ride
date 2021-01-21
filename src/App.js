import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import FastRideSuccess from "./containers/FastRider/FastRiderSuccess";
import Main from "./containers/Main";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/success" component={FastRideSuccess} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;

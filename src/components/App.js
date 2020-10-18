import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";

import FastRideSuccess from "./jungleComponents/FastRiderSuccess";
import Main from "./Main";

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

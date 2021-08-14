import SignUp from "../View/SignUp";
import Login from "../View/Login";
import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Welcome from "../View/Welcome";

const LoggedOutRouter: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact={true} component={Welcome}></Route>
        <Route path="/Login" component={Login}></Route>
        <Route path="/SignUp" component={SignUp}></Route>
      </Switch>
    </HashRouter>
  );
};

export default LoggedOutRouter;

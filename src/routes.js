import React from "react";

import { Redirect, Switch, BrowserRouter, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import Register from "./pages/Register";
import Login from "./pages/Login";
import DashBoard from "./pages/DashBoard";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/" component={Login}></Route>
        <PrivateRoute path="/dashboard" component={DashBoard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

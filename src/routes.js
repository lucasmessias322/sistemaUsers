import React from "react";
import { isAuthenticated } from "./auth";
import { Redirect, Switch, BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/Login";
import DashBoard from "./pages/DashBoard";

const PrivateRoute = ({ component: Component, ...rest }) => {

  
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );
};

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <PrivateRoute path="/dashboard" component={DashBoard} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

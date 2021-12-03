import React, { useContext } from 'react';
import { Redirect, Switch, BrowserRouter, Route } from "react-router-dom";
import { isAuthenticated } from "./Auth/auth";
import {AppContext} from './data/Store'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const {token} = useContext(AppContext);

    return (
      <Route
        {...rest}
        render={(props) =>
          token ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          )
        }
      />
    );
  };

  export default PrivateRoute
import React, { useContext } from 'react';
import { Redirect, Route } from "react-router-dom";
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
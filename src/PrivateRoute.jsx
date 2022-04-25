import React, { useContext } from 'react';
import { Navigate, Route } from "react-router-dom";
import {AppContext} from './data/Store'

const PrivateRoute = ({ children, redirectTo }) => {
    const {token} = useContext(AppContext);
    const isAuthenticated = token
    return isAuthenticated ? children : <Navigate to={redirectTo}/>
    
  };

  export default PrivateRoute
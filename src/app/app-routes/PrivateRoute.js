import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const email = useSelector((state) => state.Users.email);
  return (
    <Route
      {...rest}
      render={(props) =>
        email ? <Component {...rest} {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;

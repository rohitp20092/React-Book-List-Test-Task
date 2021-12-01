import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

const PublicRoute = ({ component: Component, ...rest }) => {
  const email = useSelector((state) => state.Users.email);
  return (
    <Route
      {...rest}
      render={(props) =>
        email ? (
          <Redirect to="/" />
        ) : (
          <Component {...rest} {...props} />
        )
      }
    />
  );
};

export default PublicRoute;

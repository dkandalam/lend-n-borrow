import React from "react";
import { useLocation, Switch, Route, Link } from "react-router-dom";
import LoginPage from "../components/LoginPage";

const AppRoutes = (props) => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/login">
          <p>Login Loading...</p>
        </Route>
        <Route exact path="/signup">
          <p>SignUp Loading...</p>
        </Route>
      </Switch>
    </React.Fragment>
  );
};
export default AppRoutes;

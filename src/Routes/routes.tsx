/* eslint-disable @typescript-eslint/ban-types */
import IRouteModel from "../Models/IRouteModel";
import React from "react";
import { Router, Switch, Route, useHistory } from "react-router-dom";
import config from "./config";


const Routes: React.FunctionComponent = () => {
  const history = useHistory();

  return (
    <Router history={history}>
      <Switch>
        {config.map((route: IRouteModel, i) => {
          const { component: Component, ...params } = route;

            return <Route key={i} {...params} render={(routeProps: any) => <Component {...routeProps} />} />;
        })}
      </Switch>
    </Router>
  );
};

export default Routes;

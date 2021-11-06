import React from "react";

interface IRouteModel {
  path: string;
  exact: boolean;
  auth: boolean;
  component: React.FunctionComponent<any>;
}

export default IRouteModel;

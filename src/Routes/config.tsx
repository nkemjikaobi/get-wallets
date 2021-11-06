import Dashboard from "src/Pages/Dashboard/Dashboard";
import HomePage from "src/Pages/Home/HomePage";
import RouteModel from "../Models/IRouteModel";

const config: Array<RouteModel> = [
  {
    path: "/",
    exact: true,
    auth: false,
    component: HomePage,
  },
  {
    path: "/dashboard",
    exact: true,
    auth: false,
    component: Dashboard,
  },
];

export default config;

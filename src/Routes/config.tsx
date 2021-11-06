import HomePage from "src/Pages/Home/HomePage";
import RouteModel from "../Models/IRouteModel";

const config: Array<RouteModel> = [
  {
    path: "/",
    exact: true,
    auth: false,
    component: HomePage,
  },
];

export default config;

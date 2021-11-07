import Dashboard from "src/Pages/Dashboard/Dashboard";
import HomePage from "src/Pages/Home/HomePage";
import Transaction from "src/Pages/Transactions/Transaction";
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
  {
    path: "/transactions",
    exact: true,
    auth: false,
    component: Transaction,
  },
];

export default config;

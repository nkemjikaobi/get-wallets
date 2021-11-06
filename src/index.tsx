import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes/routes";
import PaymentState from "./Http/Context/Actions/Payments/PaymentState"


ReactDOM.render(
  <React.StrictMode>
    <PaymentState>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </PaymentState>
  </React.StrictMode>,
  document.getElementById("root")
);

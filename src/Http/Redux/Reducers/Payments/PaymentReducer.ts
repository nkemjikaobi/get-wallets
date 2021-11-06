/* eslint-disable @typescript-eslint/ban-types */

// import { IndexActions } from "Http/Redux/Actions/ActionCreators/Index";
import { PaymentAction } from "../../Actions/Payments/PaymentAction";
import { IPaymentState, CREATE_WALLET, GET_ALL_WALLETS,GET_WALLET_TRANSACTIONS,FUND_WALLET_MANUALLY, GET_WALLET_DETAILS } from "../../Types/Payments/Types";
// import { REHYDRATE } from "redux-persist/es/constants";

export const PaymentInitialState: any = {
  Wallet: null,
  AllWallets: null,
  Balance: null,
};

const PaymentReducer = (state: any = PaymentInitialState, action: PaymentAction): any => {
  switch (action.type) {
    case CREATE_WALLET:
      return {
        ...state,
        Wallet: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default PaymentReducer;

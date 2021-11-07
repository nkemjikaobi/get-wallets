import IWallet from "src/dto/Payments/IWallet";

export const CREATE_WALLET = "CREATE_WALLET";
export const GET_ALL_WALLETS = "GET_ALL_WALLETS";
export const GET_WALLET = "GET_WALLET";
export const GET_WALLET_DETAILS = "GET_WALLET_DETAILS";
export const GET_WALLET_TRANSACTIONS = "GET_WALLET_TRANSACTIONS";
export const FUND_WALLET_MANUALLY = "FUND_WALLET_MANUALLY";
export const PAYMENT_ERROR = "PAYMENT_ERROR";
export const SHOW_SIDEBAR = "SHOW_SIDEBAR";
export const SIDEBAR_ERROR = "SIDEBAR_ERROR";
export const CLEAR_MESSAGE = "CLEAR_MESSAGE";


export interface IPaymentState {
  wallet: IWallet;
  sidebar: boolean;
  allWallets: Array<IWallet>;
  balance: any;
  transactions: any;
  message: '';
}
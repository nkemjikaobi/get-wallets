export const CREATE_WALLET = "CREATE_WALLET";
export const GET_ALL_WALLETS = "GET_ALL_WALLETS";
export const GET_WALLET_DETAILS = "GET_WALLET_DETAILS";
export const GET_WALLET_TRANSACTIONS = "GET_WALLET_TRANSACTIONS";
export const FUND_WALLET_MANUALLY = "FUND_WALLET_MANUALLY";


export interface IPaymentState {
  Wallet: any;
  AllWallets: any;
  Balance: any;
}
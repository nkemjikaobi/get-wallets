import IBalances from "./IBalances";

interface IWallet {
  wallet_id: string;
  customer_email: string;
  customer_phone: string;
  created_at: string;
  updated_at: string;
  status: string;
  environment: string;
  organization_id: string;
  currency: string;
  balance: number;
  balances: IBalances;
  allow_withdraw: boolean;
  meta_data: any;
  allow_fund: boolean;
  allow_wallet_transfer: boolean;
  allow_bank_transfer: boolean;
}

export default IWallet;

/**
 * Routes for Payments
 */

import config from "../../Configurations/configurations";

export const GATEWAY_API_ROUTE = config.web.baseUrl


export const CREATE_WALLET_URL = `${GATEWAY_API_ROUTE}/wallets`;
export const GET_ALL_WALLETS_URL = `${GATEWAY_API_ROUTE}/wallets`;
export const GET_WALLET_DETAILS_URL = (walletId: string) => `${GATEWAY_API_ROUTE}/wallets${walletId}`;
export const GET_WALLET_TRANSACTIONS_URL = (walletId: string) => `${GATEWAY_API_ROUTE}/transactions/wallets/${walletId}`;
export const FUND_WALLET_MANUALLY_URL = `${GATEWAY_API_ROUTE}/wallets/funds/manual`;


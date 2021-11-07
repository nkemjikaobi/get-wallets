import React, { useReducer } from 'react';
import paymentContext from '../../Contexts/Payments/paymentContext';
import paymentReducer from '../../Reducers/Payments/paymentReducer';
import { CREATE_WALLET, PAYMENT_ERROR, SHOW_SIDEBAR, SIDEBAR_ERROR, GET_ALL_WALLETS, GET_WALLET_TRANSACTIONS, GET_WALLET, FUND_WALLET_MANUALLY, CLEAR_MESSAGE } from '../../Types/Payments/Types';
import PaymentService from '../../../Services/PaymentService';
import IFundWallet from 'src/dto/Payments/IFundWallet';

const PaymentState = (props: any) => {
	const PaymentInitialState: any = {
		wallet: null,
		sidebar: false,
		allWallets: null,
		balance: null,
		transactions: null,
		message: '',
	};

	const [state, dispatch] = useReducer(paymentReducer, PaymentInitialState);

	//Create wallet action
	const createWalletAction = async (email: string) => {
		try {
			const res: any = await PaymentService.CreateWallet(email);
			const message = 'Wallet Created Successfully'
			dispatch({
				type: CREATE_WALLET,
				payload: { res, message },
			});
		} catch (error) {
			dispatch({
				type: PAYMENT_ERROR,
				payload: error,
			});
		}
	};

	//Get all wallets action
	const getAllWalletsAction = async () => {
		try {
			const res: any = await PaymentService.GetWallets();
			dispatch({
				type: GET_ALL_WALLETS,
				payload: res,
			});
		} catch (error) {
			dispatch({
				type: PAYMENT_ERROR,
				payload: error,
			});
		}
	};

	//Get wallet action
	const getWalletAction = async () => {
		try {
			const wallet: any = localStorage.getItem('wallet');
			const res: any = JSON.parse(wallet);
			dispatch({
				type: GET_WALLET,
				payload: res,
			});
		} catch (error) {
			dispatch({
				type: PAYMENT_ERROR,
				payload: error,
			});
		}
	};

	//Get all transactions action
	const getAllTransactionsAction = async (walletId: string) => {
		try {
			const res: any = await PaymentService.GetTransactions(walletId);
			dispatch({
				type: GET_WALLET_TRANSACTIONS,
				payload: res,
			});
		} catch (error) {
			dispatch({
				type: PAYMENT_ERROR,
				payload: error,
			});
		}
	};

	//Fund Wallet
	const fundWalletAction = async (walletDetails: IFundWallet) => {
		try {
			const res: any = await PaymentService.FundWallet(walletDetails);
			dispatch({
				type: FUND_WALLET_MANUALLY,
				payload: res.message,
			});
		} catch (error) {
			dispatch({
				type: PAYMENT_ERROR,
				payload: error,
			});
		}
	};

	//Set visibility of sidebar
	const showSideBar = async (visibility: boolean) => {
		try {
			
			dispatch({
				type: SHOW_SIDEBAR,
				payload: visibility,
			});
		} catch (error) {
			dispatch({
				type: SIDEBAR_ERROR,
				payload: error,
			});
		}
	};

	//Clear Message
	const clearMessage = async () => {
		try {
			
			dispatch({
				type: CLEAR_MESSAGE,
			});
		} catch (error) {
			dispatch({
				type: SIDEBAR_ERROR,
				payload: error,
			});
		}
	};

	return (
		<paymentContext.Provider
			value={{
				wallet: state.wallet,
				allWallets: state.allWallets,
				balance: state.balance,
				transactions: state.transactions,
				sidebar: state.sidebar,
				message: state.message,
				createWalletAction,
				showSideBar,
				getAllWalletsAction,
				getAllTransactionsAction,
				getWalletAction,
				fundWalletAction,
				clearMessage,
			}}
		>
			{props.children}
		</paymentContext.Provider>
	);
};

export default PaymentState;

import React, { useReducer } from 'react';
import axios from 'axios';
import paymentContext from '../../Contexts/Payments/paymentContext';
import paymentReducer from '../../Reducers/Payments/paymentReducer';
import { CREATE_WALLET, PAYMENT_ERROR, SHOW_SIDEBAR, SIDEBAR_ERROR, GET_ALL_WALLETS, GET_WALLET_TRANSACTIONS, GET_WALLET } from '../../Types/Payments/Types';
import PaymentService from '../../../Services/PaymentService';

const PaymentState = (props: any) => {
	const PaymentInitialState: any = {
		wallet: null,
		sidebar: false,
		allWallets: null,
		balance: null,
		transactions: null,
	};

	const [state, dispatch] = useReducer(paymentReducer, PaymentInitialState);

	//Create wallet action
	const createWalletAction = async (email: string) => {
		try {
			const res: any = await PaymentService.CreateWallet(email);
			//JSON.parse(localStorage.getItem('wallet));
			dispatch({
				type: CREATE_WALLET,
				payload: res,
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
			console.log({ res });
			//localStorage.setItem('wallet', res);
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
			console.log({ getme: res });
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
			console.log({ res });
			//localStorage.setItem('wallet', res);
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

	return (
		<paymentContext.Provider
			value={{
				wallet: state.wallet,
				allWallets: state.allWallets,
				balance: state.balance,
				transactions: state.transactions,
				sidebar: state.sidebar,
				createWalletAction,
				showSideBar,
				getAllWalletsAction,
				getAllTransactionsAction,
				getWalletAction,
			}}
		>
			{props.children}
		</paymentContext.Provider>
	);
};

export default PaymentState;

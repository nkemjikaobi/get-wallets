import React, { useReducer } from 'react';
import axios from 'axios';
import paymentContext from '../../Contexts/Payments/paymentContext';
import paymentReducer from '../../Reducers/Payments/paymentReducer';
import { CREATE_WALLET, PAYMENT_ERROR } from '../../Types/Payments/Types';
import PaymentService from '../../../Services/PaymentService';

const PaymentState = (props: any) => {
	const PaymentInitialState: any = {
		wallet: null,
		allWallets: null,
		balance: null,
		transactions: null,
	};

	const [state, dispatch] = useReducer(paymentReducer, PaymentInitialState);

	//Create wallet action
	const createWalletAction = async (email: string) => {
		try {
			const res = await PaymentService.CreateWallet(email);
			console.log(res);
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

	return (
		<paymentContext.Provider
			value={{
				wallet: state.wallet,
				allWallets: state.allWallets,
				balance: state.balance,
				transactions: state.transactions,
				createWalletAction,
			}}
		>
			{props.children}
		</paymentContext.Provider>
	);
};

export default PaymentState;

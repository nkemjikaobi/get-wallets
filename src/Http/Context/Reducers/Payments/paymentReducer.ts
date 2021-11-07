import {
	IPaymentState,
	CREATE_WALLET,
	SHOW_SIDEBAR,
	GET_ALL_WALLETS,
	GET_WALLET_TRANSACTIONS,
	GET_WALLET,
	FUND_WALLET_MANUALLY,
	CLEAR_MESSAGE,
} from '../../Types/Payments/Types';

const paymentReducer = (state: IPaymentState, action: any) => {
	switch (action.type) {
		case CLEAR_MESSAGE:
			return {
				...state,
				message: '',
			};
		case CREATE_WALLET:
			return {
				...state,
				wallet: action.payload,
			};
		case GET_ALL_WALLETS:
			return {
				...state,
				allWallets: action.payload,
			};
		case GET_WALLET:
			return {
				...state,
				wallet: action.payload,
			};
		case GET_WALLET_TRANSACTIONS:
			return {
				...state,
				transactions: action.payload,
			};
		case FUND_WALLET_MANUALLY:
			return {
				...state,
				message: action.payload,
			};
		case SHOW_SIDEBAR:
			return {
				...state,
				sidebar: action.payload,
			};
		default:
			return state;
	}
};
export default paymentReducer;

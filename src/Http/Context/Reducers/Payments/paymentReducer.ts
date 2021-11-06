import {
	IPaymentState,
	CREATE_WALLET,
	SHOW_SIDEBAR,
} from '../../Types/Payments/Types';

const paymentReducer = (state: IPaymentState, action: any) => {
	switch (action.type) {
		case CREATE_WALLET:
			return {
				...state,
				wallet: action.payload,
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

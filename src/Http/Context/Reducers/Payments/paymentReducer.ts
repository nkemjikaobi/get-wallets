import {
    IPaymentState,
	CREATE_WALLET,
} from '../../Types/Payments/Types';

const paymentReducer = (state: IPaymentState, action: any) => {
	switch (action.type) {
		case CREATE_WALLET:
			return {
				...state,
				wallet: action.payload,
			};
		default:
			return state;
	}
};
export default paymentReducer;

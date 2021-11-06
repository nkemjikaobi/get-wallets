/* eslint-disable max-len */
import IWallet from '../../dto/Payments/IWallet';
import axios from 'axios';
import {
	CREATE_WALLET_URL,
	GET_ALL_WALLETS_URL,
	GET_WALLET_DETAILS_URL,
	GET_WALLET_TRANSACTIONS_URL,
	FUND_WALLET_MANUALLY_URL,
} from '../Routes/Payments';
import config from '../../Configurations/configurations';

const authAxios = axios.create({
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${config.web.secretKey}`,
	},
});

class PaymentService {
	/**
	 * Method to create wallet
	 * @param email
	 * @returns result IWallet
	 */
	public static CreateWallet = async (
		customer_email: string
	): Promise<IWallet> => {
		let result: any;
		const payload = {
			customer_email: customer_email,
		};

		try {
			const wallet = await authAxios.post(CREATE_WALLET_URL, payload);
			console.log(wallet);
			result = wallet.data.data;
		} catch (error: any) {}
		return result;
	};
}

export default PaymentService;

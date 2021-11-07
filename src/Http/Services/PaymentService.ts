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
import { GET_ALL_WALLETS } from '../Context/Types/Payments/Types';

console.log(config.web.secretKey);
const authAxios = axios.create({
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
		'Authorization': `Bearer ${config.web.secretKey}`,
		'Access-Control-Allow-Origin': '*',
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
			result = wallet.data.data;
			console.log({ wallet });
		} catch (error: any) {}
		return result;
	};

	/**
	 * Method to get all wallets
	 * @returns result Array<IWallet>
	 */
	public static GetWallets = async (): Promise<Array<IWallet>> => {
		let result: any;

		try {
			const wallets = await authAxios.get(GET_ALL_WALLETS_URL);
			result = wallets;
			console.log({ wallets });
		} catch (error: any) {}
		return result;
	};
}

export default PaymentService;

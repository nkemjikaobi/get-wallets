import React, { useContext, useEffect } from 'react';
import paymentContext from '../../Http/Context/Contexts/Payments/paymentContext';

const WalletTableItem: React.FunctionComponent = () => {
	const PaymentContext: any = useContext(paymentContext);
	const { wallet, getWalletAction } = PaymentContext;
	const { wallet_id, status, customer_email, balance, created_at } = wallet || {};

	useEffect(() => {
		if (wallet === null) {
			getWalletAction();
		}
		//eslint-disable-next-line
	}, [wallet]);
	return (
		<>
			<tr>
				<td>{wallet_id}</td>
				<td>{status}</td>
				<td>{customer_email}</td>
				<td>₦{balance}</td>
				<td>{created_at}</td>
			</tr>
		</>
	);
};

export default WalletTableItem;

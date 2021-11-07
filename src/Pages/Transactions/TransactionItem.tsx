import React, { useContext, useEffect } from 'react';
import paymentContext from '../../Http/Context/Contexts/Payments/paymentContext';

const TransactionItem = () => {
	const PaymentContext: any = useContext(paymentContext);
	const { transactions, getAllTransactionsAction } =
		PaymentContext;
	const { wallet_id, status, type, amount, currency, provider, created_at } =
		transactions || {};

	useEffect(() => {
		getAllTransactionsAction(wallet_id);
		//eslint-disable-next-line
	}, [transactions]);
	return (
		<>
			<tr>
				<td>{wallet_id}</td>
				<td>{status}</td>
				<td>₦{amount}</td>
				<td>{type}</td>
				<td>{currency}</td>
				<td>{provider}</td>
				<td>{created_at}</td>
			</tr>
		</>
	);
};

export default TransactionItem;

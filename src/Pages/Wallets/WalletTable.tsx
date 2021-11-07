import React, { useContext,useEffect  } from 'react';
import paymentContext from '../../Http/Context/Contexts/Payments/paymentContext';
import styles from './WalletTable.module.scss';
import WalletTableItem from './WalletTableItem';

const WalletTable = () => {
	const PaymentContext: any = useContext(paymentContext);
	const { wallet, getWalletAction } = PaymentContext;

	useEffect(() => {
		if (wallet === null) {
			getWalletAction();
		}
		//eslint-disable-next-line
	}, [wallet]);

	return (
		<table className={styles.table}>
			<thead>
				<tr>
					<th>Wallet ID</th>
					<th>Status</th>
					<th>Customer Email</th>
					<th>Balance</th>
					<th>Date Created</th>
				</tr>
			</thead>
			<tbody>
				{wallet === null ? <div>No wallet found</div> : <WalletTableItem />}
			</tbody>
		</table>
	);
};

export default WalletTable;

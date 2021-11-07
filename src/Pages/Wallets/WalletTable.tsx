import React, { useContext, useEffect } from 'react';
import IWallet from 'src/dto/Payments/IWallet';
import paymentContext from '../../Http/Context/Contexts/Payments/paymentContext';
import styles from './WalletTable.module.scss';
import WalletTableItem from './WalletTableItem';

const WalletTable = () => {
	const PaymentContext: any = useContext(paymentContext);
	const { wallet, allWallets, getAllWalletsAction } = PaymentContext;

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
				<WalletTableItem />
			</tbody>
		</table>
	);
};

export default WalletTable;

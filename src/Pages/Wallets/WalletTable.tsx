import React, { useContext, useEffect } from 'react';
import IWallet from 'src/dto/Payments/IWallet';
import paymentContext from '../../Http/Context/Contexts/Payments/paymentContext';
import styles from './WalletTable.module.scss';
import WalletTableItem from './WalletTableItem';

const WalletTable = () => {
	const PaymentContext: any = useContext(paymentContext);
	const { wallet, allWallets, getAllWalletsAction } = PaymentContext;

	useEffect(() => {
		//getAllWalletsAction();
		//eslint-disable-next-line
	}, [allWallets]);

	return (
		<table className={styles.table}>
			<thead>
				<tr>
					<th>Wallet ID</th>
					<th>Status</th>
					<th>Customer Email</th>
					<th>Balance</th>
					<th>Date Created</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{/* {allWallets !== null ? (
					allWallets.map((singleWallet: IWallet) => (
						<WalletTableItem
							wallet={singleWallet}
							key={singleWallet.wallet_id}
						/>
					))
				) : (
					<div>No wallets created</div>
				)} */}
				<WalletTableItem />
				<WalletTableItem />
				<WalletTableItem />
				<WalletTableItem />
				<WalletTableItem />
				<WalletTableItem />
				<WalletTableItem />
			</tbody>
		</table>
	);
};

export default WalletTable;

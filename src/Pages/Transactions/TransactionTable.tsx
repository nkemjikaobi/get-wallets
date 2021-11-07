import React from 'react'
import TransactionItem from './TransactionItem';
import styles from "./Transaction.module.scss";

const TransactionTable = () => {
    return (
			<table className={styles.table}>
				<thead>
					<tr>
						<th>Wallet ID</th>
						<th>Status</th>
						<th>Amount</th>
						<th>Type</th>
						<th>Currency</th>
						<th>Provider</th>
						<th>Date</th>
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
					<TransactionItem />
					<TransactionItem />
					<TransactionItem />
					<TransactionItem />
					<TransactionItem />
					<TransactionItem />
					<TransactionItem />
				</tbody>
			</table>
		);
}

export default TransactionTable

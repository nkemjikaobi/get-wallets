import React, { useContext, useEffect } from 'react';
import { composeClasses } from 'src/libs/utils/utils';
import TransactionTable from './TransactionTable';
import styles from './Transaction.module.scss';
import SideBar from 'src/Components/SideBar/SideBar';
import paymentContext from '../../Http/Context/Contexts/Payments/paymentContext';
import { isMobile } from 'react-device-detect';
import { HiMenuAlt3 } from 'react-icons/hi';

const Transaction = () => {
	const PaymentContext: any = useContext(paymentContext);
	const {
		sidebar,
		showSideBar,
		getAllTransactionsAction,
		transactions,
		wallet,
		getWalletAction,
	} = PaymentContext;
	useEffect(() => {
		if (isMobile) {
			showSideBar(true);
		}
		//eslint-disable-next-line
	}, []);

	useEffect(() => {
		if (wallet === null) {
			getWalletAction();
		}
		//eslint-disable-next-line
	}, [wallet]);

	useEffect(() => {
		if (wallet !== null) {
			getAllTransactionsAction(wallet.wallet_id);
		}
		//eslint-disable-next-line
	}, []);
	return (
		<>
			<div className={styles.mainContent}>
				<div className={styles.mobileOnly}>{sidebar && <SideBar />}</div>
				<div className={composeClasses(styles.tabletAndAboveOnly, styles.size)}>
					<SideBar />
				</div>
				<div className={styles.tableContainer}>
					<HiMenuAlt3 onClick={() => showSideBar(!sidebar)} />
					<h2 className={styles.tabletAndAboveOnly}>Transactions</h2>
					{transactions !== null ? (
						<TransactionTable />
					) : (
						<div>No transactions found</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Transaction;

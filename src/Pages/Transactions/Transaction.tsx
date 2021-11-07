import React, { useContext, useEffect } from 'react'
import { composeClasses } from 'src/libs/utils/utils';
import TransactionTable from './TransactionTable';
import styles from "./Transaction.module.scss";
import SideBar from 'src/Components/SideBar/SideBar';
import paymentContext from '../../Http/Context/Contexts/Payments/paymentContext';
import { isMobile } from 'react-device-detect';

const Transaction = () => {
    const PaymentContext: any = useContext(paymentContext);
		const { sidebar, showSideBar } =
			PaymentContext;
		useEffect(() => {
			if (isMobile) {
				showSideBar(true);
			}
			//eslint-disable-next-line
		}, []);
    return (
			<>
				<div className={styles.mainContent}>
					<div className={styles.mobileOnly}>{sidebar && <SideBar />}</div>
					<div
						className={composeClasses(styles.tabletAndAboveOnly, styles.size)}
					>
						<SideBar />
					</div>
					<div className={styles.tableContainer}>
						<h2>Transactions</h2>
						<TransactionTable />
					</div>
				</div>
			</>
		);
}

export default Transaction

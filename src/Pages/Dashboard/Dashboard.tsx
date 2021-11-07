import React, { useContext, useEffect } from 'react';
import SideBar from 'src/Components/SideBar/SideBar';
import paymentContext from '../../Http/Context/Contexts/Payments/paymentContext';
import styles from './Dashboard.module.scss';
import { isMobile } from 'react-device-detect';
import WalletTable from '../Wallets/WalletTable';
import { composeClasses } from "../../libs/utils/utils";

const Dashboard = () => {
	const PaymentContext: any = useContext(paymentContext);
	const { sidebar, showSideBar, wallet, allWallets, getAllWalletsAction } =
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
				<div className={composeClasses(styles.tabletAndAboveOnly, styles.size)}>
					<SideBar />
				</div>
				<div className={styles.tableContainer}>
					<h2>Wallet</h2>
					<WalletTable />
				</div>
			</div>
		</>
	);
};

export default Dashboard;

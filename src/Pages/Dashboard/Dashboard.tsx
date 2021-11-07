import React, { useContext, useEffect } from 'react';
import SideBar from 'src/Components/SideBar/SideBar';
import paymentContext from '../../Http/Context/Contexts/Payments/paymentContext';
import styles from './Dashboard.module.scss';
import { isMobile } from 'react-device-detect';
import WalletTable from '../Wallets/WalletTable';
import { composeClasses } from "../../libs/utils/utils";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
	const PaymentContext: any = useContext(paymentContext);
	const { sidebar, showSideBar, message, clearMessage } =
		PaymentContext;
	useEffect(() => {
		if (isMobile) {
			showSideBar(true);
		}
		//eslint-disable-next-line
	}, []);

	useEffect(() => {
		if (message !== '') {
			toast.success('Wallet Funded');
		}
		clearMessage();
		//eslint-disable-next-line
	}, [message]);

	return (
		<>
			<div className={styles.mainContent}>
				<ToastContainer />
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

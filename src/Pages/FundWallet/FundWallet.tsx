import React, {useContext, useEffect} from 'react'
import styles from "./FundWallet.module.scss";
import SideBar from 'src/Components/SideBar/SideBar';
import paymentContext from '../../Http/Context/Contexts/Payments/paymentContext';
import { isMobile } from 'react-device-detect';
import { composeClasses } from '../../libs/utils/utils';
import FundWalletForm from './FundWalletForm';

const FundWallet = () => {
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
						<h2>Fund Wallet</h2>
						<FundWalletForm />
					</div>
				</div>
			</>
		);
}

export default FundWallet

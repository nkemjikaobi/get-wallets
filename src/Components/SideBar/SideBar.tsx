import React, {useContext} from 'react';
import styles from './SideBar.module.scss';
import { FaTimes, FaWallet } from 'react-icons/fa';
import { MdDashboard, MdHistoryToggleOff } from 'react-icons/md';
import { AiFillHome } from 'react-icons/ai';
import { BiWallet } from 'react-icons/bi';
import { useHistory } from "react-router-dom";
import paymentContext from "../../Http/Context/Contexts/Payments/paymentContext";
import useClickOutside from 'src/CustomHooks/useClickOutside';


const SideBar = () => {
    const history = useHistory();
    const PaymentContext: any = useContext(paymentContext);
    const { showSideBar } = PaymentContext;
	const SideBarData = [
		{
			icon: <MdDashboard />,
			name: 'Dashboard',
			link: '/dashboard',
		},
		{
			icon: <BiWallet />,
			name: 'Create Wallet',
			link: '/create-wallet',
		},
		{
			icon: <MdHistoryToggleOff />,
			name: 'Transaction History',
			link: '/transactions',
		},
		{
			icon: <FaWallet />,
			name: 'Fund Wallet',
			link: '/fund-wallet',
		},
		{
			icon: <AiFillHome />,
			name: 'Go Home',
			link: '/',
		},
	];
    const handleClick = (e: any, link: string) => {
        e.preventDefault();
        history.push(link);
    }
    const sideBarNode = useClickOutside(() => {
			showSideBar(false);
		});
	return (
		<div className={styles.sidebar} ref={sideBarNode}>
			<div className={styles.header}>
				<div>Dashboard</div>
				<div onClick={() => showSideBar(false)}>
					<FaTimes />
				</div>
			</div>
			<hr />
			<div className={styles.content}>
				{SideBarData.map(data => {
					return (
						<div className={styles.indidividualContent} onClick={(e) => handleClick(e,data.link)}>
							<div>{data.icon}</div>
							<div>{data.name}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default SideBar;

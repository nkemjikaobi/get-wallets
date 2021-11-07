import React from 'react';
import IWallet from 'src/dto/Payments/IWallet';
import { BiEdit } from 'react-icons/bi';

interface IWalletTableItem {
	wallet: IWallet;
}

const WalletTableItem: React.FunctionComponent<any> = ({
	wallet,
}) => {
	//const { wallet_id, status, customer_email, balance, created_at } = wallet;
	return (
		<>
			{/* <tr>
				<td>{wallet_id}</td>
				<td>{status}</td>
				<td>{customer_email}</td>
				<td>{balance}</td>
                <td>{created_at}</td>
                <td><BiEdit /></td>
			</tr> */}
			<tr>
				<td>73567285623658382</td>
				<td>active</td>
				<td>nkemjikaobi@gmail.com</td>
				<td>N500,000</td>
                <td>Sat Nov 6 2021</td>
                <td><BiEdit /></td>
			</tr>
		</>
	);
};

export default WalletTableItem;

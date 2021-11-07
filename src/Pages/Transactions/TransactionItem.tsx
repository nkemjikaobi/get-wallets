import React from 'react'
import { BiEdit } from 'react-icons/bi';

const TransactionItem = () => {
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
					<td>N500,000</td>
					<td>Single</td>
					<td>USD</td>
					<td>FlutterWave</td>
					<td>Sat Nov 6 2021</td>
					<td>
						<BiEdit />
					</td>
				</tr>
			</>
		);
}

export default TransactionItem

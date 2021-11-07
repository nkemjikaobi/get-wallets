import React, { useState, useContext, useEffect } from 'react';
import { composeClasses } from 'src/libs/utils/utils';
import styles from './FundWalletForm.module.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import paymentContext from '../../Http/Context/Contexts/Payments/paymentContext';
import { useHistory } from 'react-router-dom';

interface IFundWalletForm {
	wallet_id: string;
	currency: string;
	amount: string;
}
const FundWalletForm = () => {
	const PaymentContext: any = useContext(paymentContext);
	const { getWalletAction, fundWalletAction, wallet } =
		PaymentContext;
	const history = useHistory();
	const [values, setValues] = useState<IFundWalletForm>({
		wallet_id: `${wallet && wallet.wallet_id}`,
		currency: 'NGN',
		amount: '',
	});

	useEffect(() => {
		if (wallet === null) {
			getWalletAction();
		}
		//eslint-disable-next-line
	}, [wallet]);

	useEffect(() => {
		if (wallet !== null) {
			setValues({ ...values, wallet_id: wallet.wallet_id });
		}
		//eslint-disable-next-line
	}, [wallet]);
	useEffect(() => {
		if (wallet === null) {
			getWalletAction();
		}
		//eslint-disable-next-line
	}, [wallet]);

	const handleInputChange = (e: any) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		//Validation
		const hasEmptyFields = Object.values(values).some(
			element => element === ''
		);

		if (hasEmptyFields) {
			return toast.error('Please fill in all fields');
		}
		fundWalletAction(values);
		setValues({ ...values, amount: '' });
		history.push('/dashboard');
	};
	return (
		<div className={styles.container}>
			<div className={styles.formContainer}>
				<span>Fund Your Wallet</span>
				<ToastContainer />

				<form action=''>
					<div className={styles.formGroup}>
						<label htmlFor='username'>Wallet ID</label>
						<input
							type='text'
							name='wallet_id'
							placeholder='Enter The Wallet ID'
							defaultValue={wallet && wallet.wallet_id}
						/>
					</div>
					<div className={styles.formGroup}>
						<label htmlFor='currency'>Currency</label>
						<select name='currency' onChange={handleInputChange}>
							<option value='NGN'>NGN</option>
							<option value='USD'>USD</option>
						</select>
					</div>
					<div className={styles.formGroup}>
						<label htmlFor='amount'>Amount</label>
						<input
							type='text'
							name='amount'
							placeholder='Enter Amount'
							value={values.amount}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<input
							type='submit'
							className={composeClasses(styles.btn, styles.btnBlock)}
							value='Fund Wallet'
							onClick={handleSubmit}
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default FundWalletForm;

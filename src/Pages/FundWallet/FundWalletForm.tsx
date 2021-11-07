import React, {useState, useContext} from 'react';
import { composeClasses } from 'src/libs/utils/utils';
import styles from './FundWalletForm.module.scss';
import PaymentService from '../../Http/Services/PaymentService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import paymentContext from '../../Http/Context/Contexts/Payments/paymentContext';
import { useHistory } from 'react-router-dom';

interface IFundWalletForm {
    wallet_id: string,
    currency: string,
    amount: string;
}
const FundWalletForm = () => {
	const PaymentContext: any = useContext(paymentContext);
	const { createWalletAction } = PaymentContext;
	const history = useHistory();
    const [values, setValues] = useState<IFundWalletForm>({
			wallet_id: '',
			currency: '',
			amount: '',
    });
    
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
			toast.error('Please fill in all fields');
		}
	};
	return (
		<div className={styles.container}>
			<div className={styles.formContainer}>
				<span>Create Your Wallet</span>
				<ToastContainer />

				<form action=''>
					<div className={styles.formGroup}>
						<label htmlFor='username'>Wallet ID</label>
						<input
							type='text'
							name='wallet_id'
							placeholder='Enter The Wallet ID'
							value={values.wallet_id}
							onChange={handleInputChange}
						/>
					</div>
					<div className={styles.formGroup}>
						<label htmlFor='currency'>Currency</label>
						<input
							type='text'
							name='currency'
							placeholder='Enter Currency'
							value={values.currency}
							onChange={handleInputChange}
						/>
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

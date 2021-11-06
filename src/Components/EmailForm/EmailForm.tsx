import React, { useState, useContext } from 'react';
import { composeClasses } from 'src/libs/utils/utils';
import styles from './EmailForm.module.scss';
import PaymentService from '../../Http/Services/PaymentService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import paymentContext from "../../Http/Context/Contexts/Payments/paymentContext";


const EmailForm: React.FunctionComponent = () => {
	const [email, setEmail] = useState<string>('');
	const PaymentContext: any = useContext(paymentContext);
	const { createWalletAction } = PaymentContext;

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		if (email === '') {
			return toast.error('Email is required');
		}
		createWalletAction(email);
	};
	return (
		<div className={styles.container}>
			<div className={styles.formContainer}>
				<span>Create Your Wallet</span>
				<ToastContainer />

				<form action=''>
					<div className={styles.formGroup}>
						<label htmlFor='username'>Email</label>
						<input
							type='email'
							name='email'
							placeholder='Enter Email'
							value={email}
							onChange={e => {
								setEmail(e.target.value);
							}}
						/>
					</div>
					<div>
						<input
							type='submit'
							className={composeClasses(styles.btn, styles.btnBlock)}
							value='Create Wallet'
							onClick={handleSubmit}
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default EmailForm;

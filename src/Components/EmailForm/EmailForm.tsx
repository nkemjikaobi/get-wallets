import React, { useState } from 'react';
import { composeClasses } from 'src/libs/utils/utils';
import styles from './EmailForm.module.scss';
import PaymentService from "../../Http/Services/PaymentService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EmailForm = () => {
	const [email, setEmail] = useState<string>('');
	const handleSubmit = async (e: any) => {
		e.preventDefault();
		if (email === '') {
			return toast.error('Email is required'); 
		}
		const wallet = await PaymentService.CreateWallet(email)
		console.log({wallet});
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

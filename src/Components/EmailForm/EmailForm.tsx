import React, { useState } from 'react';
import { composeClasses } from 'src/libs/utils/utils';
import styles from './EmailForm.module.scss';

const EmailForm = () => {
	const [email, setEmail] = useState<string>('');
	const handleSubmit = () => {
		console.log('submitted');
	};
	return (
		<div className={styles.container}>
			<div className={styles.formContainer}>
				<span>Create Your Wallet</span>
				<form action=''>
					<div className={styles.formGroup}>
						<label htmlFor='username'>Username</label>
						<input
							type='email'
							data-testid='username'
							name='username'
							placeholder='Enter Username'
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

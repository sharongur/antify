import { useCallback } from 'react';
import axios from 'axios';
import { LogInForm } from './form';

export function Registration() {
	const onSubmitLogin = useCallback(
		async (username: string, password: string) => {
			try {
				await axios.post('http://localhost:5000/register', {
					username,
					password,
				});
				alert('Registration successful');
			} catch (err) {
				alert('Registration failed');
			}
		},
		[]
	);

	return <LogInForm title="Registration" onSubmitLogin={onSubmitLogin} buttonLabel="Register" />;
}

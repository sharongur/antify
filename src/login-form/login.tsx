import { useCallback } from 'react';
import axios from 'axios';
import { LogInForm } from './form';
import { useNavigate } from 'react-router-dom';

export function LogIn() {
	const onSubmitLogin = useCallback(
		async (username: string, password: string) => {
			try {
				await axios.post('http://localhost:5000/login', {
					username,
					password,
				});
				alert('Log-in successful');
				let navigate = useNavigate();
				navigate('/home'); // Redirect to the home after login
			} catch (err) {
				alert(err);
				console.log(err);
			}
		},
		[]
	);

	return (
		<LogInForm
			title="Log In"
			onSubmitLogin={onSubmitLogin}
			buttonLabel="Log in"
		>
			<a className="link" href="/registration">
				Registration
			</a>
		</LogInForm>
	);
}

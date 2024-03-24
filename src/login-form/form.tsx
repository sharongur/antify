import React, { useCallback, useState, PropsWithChildren } from 'react';
import './form.scss';

type LogInFormProps = {
	title: string;
	buttonLabel: string;
	onSubmitLogin: (username: string, password: string) => void;
};
export function LogInForm({
	title,
	buttonLabel,
	onSubmitLogin,
	children,
}: PropsWithChildren<LogInFormProps>) {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const onChangeUsername: React.ChangeEventHandler<HTMLInputElement> =
		useCallback(event => {
			const target = event.target;
			setUsername(target.value);
		}, []);

	const onChangePassword: React.ChangeEventHandler<HTMLInputElement> =
		useCallback(event => {
			const target = event.target;
			setPassword(target.value);
		}, []);

	// form submission
	const innerOnSubmitLogin: React.FormEventHandler<HTMLFormElement> =
		useCallback(
			event => {
				event.preventDefault(); // Prevent default form submission
				onSubmitLogin(username, password);
			},
			[password, username]
		);

	return (
		<div className="login">
			<h4>{title}</h4>
			<form onSubmit={innerOnSubmitLogin}>
				<div className="text_area">
					<input
						type="text"
						id="username"
						name="username"
						value={username}
						onChange={onChangeUsername}
						className="text_input"
					/>
				</div>
				<div className="text_area">
					<input
						type="text"
						id="password"
						name="password"
						value={password}
						onChange={onChangePassword}
						className="text_input"
					/>
				</div>
				<input type="submit" value={buttonLabel} className="btn" />
			</form>
			{children}
		</div>
	);
}

import { useCallback } from 'react';
import reactLogo from './../assets/react.svg';
import antifyLogo from '/antify.png';
import { useNavigate } from 'react-router-dom';
import './../app.scss';

export function RootPage() {
	const navigate = useNavigate();

	const routeChange = useCallback(() => {
		const path = `/login`;
		navigate(path);
	}, []);

	return (
		<>
			<div className="logos-wrapper">
				<a href="#" target="_blank">
					<img src={antifyLogo} className="logo" alt="Antify logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noreferrer">
					<img
						src={reactLogo}
						className="logo react"
						alt="React logo"
					/>
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={routeChange}>Log In</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</>
	);
}

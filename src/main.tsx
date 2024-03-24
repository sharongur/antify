import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootPage } from './routes/root.tsx';
import { LogIn } from './login-form/login.tsx';
import { Registration } from './login-form/registration.tsx';
import './index.scss';
import AntifyHome from './home-page/index.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootPage />,
	},
	{
		path: '/login',
		element: <LogIn />,
	},
	{
		path: '/registration',
		element: <Registration />,
	},
	{
		path: '/home',
		element: <AntifyHome />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

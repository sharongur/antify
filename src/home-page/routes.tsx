import { Icon } from '@chakra-ui/react';
import { MdOutlineShoppingCart } from 'react-icons/md';

// Admin Imports
import AntifyHome from 'home-page/index';

const routes = [
	{
		name: 'Antify Home',
		layout: '/admin',
		path: '/home',
		icon: <Icon as={MdOutlineShoppingCart} width='20px' height='20px' color='inherit' />,
		component: AntifyHome,
		secondary: true
	}
];

export default routes;

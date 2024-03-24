// Chakra imports
import { Portal, Box, useDisclosure } from '@chakra-ui/react';
import Footer from 'home-page/components/footer/FooterAdmin';
// Layout components
import Navbar from 'home-page/components/navbar/NavbarAdmin';
import Sidebar from 'home-page/components/sidebar/Sidebar';
import { useState } from 'react';
import { Route } from 'react-router-dom';
import routes from 'home-page/routes';

// Custom Chakra theme
export default function Dashboard(props: { [x: string]: any }) {
	const { ...rest } = props;
	// states and functions
	const [ fixed ] = useState(false);

	const getActiveRoute = (routes: RoutesType[]): string => {
		let activeRoute = 'Default Brand Text';
		for (let i = 0; i < routes.length; i++) {
			if (window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1) {
				return routes[i].name;
			}
		}
		return activeRoute;
	};
	const getActiveNavbar = (routes: RoutesType[]): boolean => {
		let activeNavbar = false;
		for (let i = 0; i < routes.length; i++) {
			if (window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1) {
				return routes[i].secondary;
			}
		}
		return activeNavbar;
	};
	const getActiveNavbarText = (routes: RoutesType[]): string | boolean => {
		let activeNavbar = false;
		for (let i = 0; i < routes.length; i++) {
			if (window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1) {
				return routes[i].name;
			}
		}
		return activeNavbar;
	};
	const getRoutes = (routes: RoutesType[]): any => {
		return routes.map((route: RoutesType, key: any) => {
			if (route.layout === '/admin') {
				return <Route path={route.layout + route.path} component={route.component} key={key} />;
			} else {
				return null;
			}
		});
	};
	document.documentElement.dir = 'ltr';
	const { onOpen } = useDisclosure();
	return (
		<Box>
				<Sidebar routes={routes} display='none' {...rest} />
				<Box
					float='right'
					minHeight='100vh'
					height='100%'
					overflow='auto'
					position='relative'
					maxHeight='100%'
					w={{ base: '100%', xl: 'calc( 100% - 290px )' }}
					maxWidth={{ base: '100%', xl: 'calc( 100% - 290px )' }}
					transition='all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)'
					transitionDuration='.2s, .2s, .35s'
					transitionProperty='top, bottom, width'
					transitionTimingFunction='linear, linear, ease'>
					<Portal>
						<Box>
							<Navbar
								onOpen={onOpen}
								logoText={'Horizon UI Dashboard PRO'}
								brandText={getActiveRoute(routes)}
								secondary={getActiveNavbar(routes)}
								message={getActiveNavbarText(routes)}
								fixed={fixed}
								{...rest}
							/>
						</Box>
					</Portal>
					<Box>
						<Footer />
					</Box>
				</Box>
		</Box>
	);
}

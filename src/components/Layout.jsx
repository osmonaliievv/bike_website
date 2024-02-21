import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Layout = ({ children }) => {
	return (
		<>
			<Header key="header" />
			{children}
			<Footer key="footer" />
		</>
	);
};

export default Layout;

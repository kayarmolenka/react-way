import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
	return (
		<header id="header_window">
		<NavLink to="/main" id="main_link">Main</NavLink>
		<a href="#" id="search_link">Search</a>
		<a href="#" id="help_link">Help</a>
		<a href="#" id="exit_link">Exit</a>	  
		</header>
	)
}

export default Header;
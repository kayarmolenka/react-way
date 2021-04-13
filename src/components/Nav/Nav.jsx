import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
	return(
		<nav id="nav_window">
			<NavLink to="/friends">Friends</NavLink>
			<NavLink to="/message">Message</NavLink>
			<NavLink to="/setting">Setting</NavLink>	
			<NavLink to="/wall">Wall</NavLink>	
			<a href="#">Liked</a>
			<a href="#">Videos</a>
			<a href="#">News</a>
			
		</nav>
	)
}

export default Nav;
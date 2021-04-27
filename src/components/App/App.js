import React from 'react';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Content from '../Content/Content';

import './App.css';

function App(props) {
	return (
		<div className="main_page">
			<Header />
			<Nav />
			<Content state={props.state} dispatch={props.dispatch} />
			<Footer />		
		</div>
		
	)
}

export default App;
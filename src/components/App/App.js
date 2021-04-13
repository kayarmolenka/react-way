import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Content from '../Content/Content';

import './App.css';

function App(props) {
	return (
		<BrowserRouter>
			<div className="main_page">
			<Header />
			<Nav />
			<Content state={props.state}/>
			<Footer />		
			</div>
		</BrowserRouter>
	)
}

export default App;
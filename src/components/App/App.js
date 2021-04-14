import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Header from '../Header/Header';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import Content from '../Content/Content';
import {addPost} from '../state';

import './App.css';

addPost('Also I want to become a Developer very well')

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
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {BrowserRouter} from 'react-router-dom';
import {addPost} from './components/state';


export const renderPage = (state) => {
	ReactDOM.render(
		<BrowserRouter>
			<App state={state} addPost={addPost}/>
		</BrowserRouter>,
		document.getElementById('root')
	);
}





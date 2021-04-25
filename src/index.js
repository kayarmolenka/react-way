import React from 'react';
import ReactDOM from 'react-dom';
import store  from './components/state';
import './index.css';
import App from './components/App/App';
import {BrowserRouter} from 'react-router-dom';

const renderPage = (state) => {
	ReactDOM.render(
		<BrowserRouter>
			<App state={store.getState()} addPost={store.addPost.bind(store)} updateTextPost={store.updateTextPost.bind(store)}/>
		</BrowserRouter>,
		document.getElementById('root')
	);
}

renderPage(store.getState());

store.subscribe(renderPage);

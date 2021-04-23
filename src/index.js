import React from 'react';
import ReactDOM from 'react-dom';
import state, {subscribe} from './components/state';
import './index.css';
import App from './components/App/App';
import {BrowserRouter} from 'react-router-dom';
import {addPost, updateTextPost} from './components/state';

const renderPage = (state) => {
	ReactDOM.render(
		<BrowserRouter>
			<App state={state} addPost={addPost} updateTextPost={updateTextPost}/>
		</BrowserRouter>,
		document.getElementById('root')
	);
}

renderPage(state);

subscribe(renderPage);

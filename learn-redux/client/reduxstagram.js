// let's go!
import React from 'react';
import {render} from 'react-dom';

//Import css
import css from './styles/style.styl';

//Import components
import App from './components/App';
import Main from './components/Main';
import PhotoGrid from './components/PhotoGrid';
import Single from './components/Single';

//Import React Router dependecies

import {Router, Route, IndexRoute, browserHistory } from 'react-router';
import {Provider } from 'react-redux';

import store, {history} from './store';

const router = (
	<Provider store={store} >


	<Router history={history}>
		<Route path = "/" component = {App}>
			<IndexRoute component={PhotoGrid}> </IndexRoute>
			<Route path = "/view/:postId" component = {Single}></Route>
		</Route>

	</Router>
	</Provider>
)


render(router, document.getElementById('root')); 
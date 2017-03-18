import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { Router, Route, browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import FourOFour from './templates/404.jsx';
import CompTwo from './templates/tempComps/CompTwo.jsx';

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
		<Router history={browserHistory}>
			<Route path="/" component={App}>			
				<Route path="/two" component={CompTwo}/>
				<Route path="*" component={FourOFour}/>
			</Route>
		</Router>
	</MuiThemeProvider>
	, document.getElementById('root')
);

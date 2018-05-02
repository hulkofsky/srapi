import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomePage';
import LocationPage from './LocationPage';

const App = ({ store }) => (
    <div>
	  <Route exact path="/" component={HomePage} />
	  <Route path="/:location" component={LocationPage} />
	</div>
)
export default App
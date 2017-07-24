import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import './App.css';
import JarPage from '../JarPage/JarPage';
import ActivityPage from '../ActivityPage/ActivityPage';

class App extends Component {
  render() {
    return (
    	<Switch>
			<Route path='/jar/:jar_id' component={ActivityPage} />
			<Route path='/' component={JarPage} />
		</Switch>

    );
  }
}
App.contextTypes = {
  store: PropTypes.object
};


export default App;

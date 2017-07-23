import React, { Component } from 'react';
<<<<<<< HEAD
import { Switch, Route } from 'react-router-dom'

import './App.css';
import JarPage from '../JarPage/JarPage';
import ActivityPage from '../ActivityPage/ActivityPage';
=======

import logo from './logo.svg';
import './App.css';
import JarList from '../../containers/JarList/JarList';
import AddJar from '../../containers/AddJar/AddJar';

>>>>>>> f6062eb0fb9211a06dd11b3f8251f7954b6b752f

class App extends Component {
  render() {
    return (
<<<<<<< HEAD
    	<Switch>
			<Route path='/jar/:jar_id' component={ActivityPage} />
			<Route path='/' component={JarPage} />
		</Switch>
=======
	<div className='container'>

		<div className='row'>
			<div className='col App-header text-primary'>
				<h2>Activity Jar</h2>
			</div>
		</div>

	    <div className='row'>
		    <div className='col'>
		        <AddJar/>
	        </div>
	    </div>

	    <div className='row'>
	    	<div className='col'>
		        <JarList/>
	        </div>
	    </div>
	    
	</div>
>>>>>>> f6062eb0fb9211a06dd11b3f8251f7954b6b752f
    );
  }
}
App.contextTypes = {
  store: React.PropTypes.object
};

<<<<<<< HEAD
=======


// create-react-app default
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

>>>>>>> f6062eb0fb9211a06dd11b3f8251f7954b6b752f
export default App;

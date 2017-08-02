import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './JarPage.css';
import JarList from '../../containers/JarList/JarList';
import AddJar from '../../containers/AddJar/AddJar';
import logo from '../../img/jar.png';

class JarPage extends Component {
  render() {
    return (
		<div className='container'>

			<div className='row'>
				<div className='col App-header text-primary'>
					<h2 style={{display: 'inline'}} className='align-middle'>Activity Jar</h2>
					<img style={{display: 'inline'}} src={logo} alt='logo' />
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
    );
  }
}
JarPage.contextTypes = {
  store: PropTypes.object
};

export default JarPage;
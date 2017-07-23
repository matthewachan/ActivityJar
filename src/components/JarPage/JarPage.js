import React, { Component } from 'react';

import './JarPage.css';
import JarList from '../../containers/JarList/JarList';
import AddJar from '../../containers/AddJar/AddJar';


class JarPage extends Component {
  render() {
    return (
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
    );
  }
}
JarPage.contextTypes = {
  store: React.PropTypes.object
};

export default JarPage;
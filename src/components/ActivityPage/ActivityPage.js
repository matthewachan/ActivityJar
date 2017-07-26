import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import AddActivity from '../../containers/AddActivity/AddActivity';
import ActivityList from '../../containers/ActivityList/ActivityList';
import GooglePlacesResults from '../../containers/GooglePlacesResults/GooglePlacesResults';

class ActivityPage extends Component {
	render() {
		const { store } = this.context;
		this.jar = store.getState()[this.props.match.params.jar_id];
		return (
			<div>
				<Link to='/'><i className="fa fa-chevron-left" aria-hidden="true"></i>&nbsp;Back to Activity Jars</Link>
				<div className='container'>
					<div className='row'>
						<div className='col'>
							<h2 className='text-primary App-header'>{this.jar.label}</h2>
						</div>
					</div>
					<div className='row'>		
						<div className='col'>
							<AddActivity {...this.props} />
						</div>
					</div>
					<div className='row'>
	
	
						<div className='col'>
							<GooglePlacesResults {...this.props} />
						</div>
						<div className='col-4'>
							<ActivityList {...this.props} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
ActivityPage.contextTypes = {
  store: PropTypes.object
};

export default ActivityPage;
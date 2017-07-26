import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AddActivity from '../../containers/AddActivity/AddActivity';
import ActivityList from '../../containers/ActivityList/ActivityList';
import GooglePlacesResults from '../../containers/GooglePlacesResults/GooglePlacesResults';

class ActivityPage extends Component {
	render() {
		const { store } = this.context;
		this.jar = store.getState()[this.props.match.params.jar_id];
		return (
			<div className='container'>
				<div className='row'>		
					<div className='col text-primary App-header'>
						<h2>{this.jar.label}</h2>
					</div>
				</div>
				<div className='row'>		
					<div className='col'>
						<AddActivity {...this.props} />
					</div>
				</div>
				<div className='row'>
					<div className='col'>
						<ActivityList {...this.props} />
					</div>
				</div>
				<div className='row'>
					<div className='col'>
						<GooglePlacesResults {...this.props} />
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

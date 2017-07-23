import React, { Component } from 'react';

import AddActivity from '../../containers/AddActivity/AddActivity';
import ActivityList from '../../containers/ActivityList/ActivityList';

class ActivityPage extends Component {
	render() {
		return (
			<div> 
				<AddActivity {...this.props} />
				<ActivityList {...this.props} />
			</div>
		);
	}
}

export default ActivityPage;
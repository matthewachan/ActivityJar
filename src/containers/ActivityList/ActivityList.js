import { connect } from 'react-redux';

import List from '../../components/List/List';

const mapStateToProps = (state, ownProps) => {
	const items = [];
	state[ownProps.match.params.jar_id].activities.forEach((element) => {
		items.push({
			id: element.activity_id,
			text: element.activity
		});
	});
	
	return {
		items: items,
		list_type: 'activity_list',
		list_link: false
	};
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		remove: (activity_id) => {
			dispatch({
				type: 'REMOVE_ACTIVITY',
				activity_id: activity_id,
				jar_id: parseInt(ownProps.match.params.jar_id, 10)
			})
		}
	};
}

const ActivityList = connect(mapStateToProps, mapDispatchToProps)(List);

export default ActivityList;
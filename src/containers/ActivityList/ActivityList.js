import { connect } from 'react-redux';

import List from '../../components/List/List';

const mapStateToProps = (state, ownProps) => {
	const items = [];
	const activities = state[ownProps.match.params.jar_id].activities
	Object.keys(activities).forEach(key => {
		items.push({
			id: key,
			text: activities[key].activity,
			repeat: activities[key].repeat
		});
	});
	
	return {
		items: items,
		list_type: 'activity_list',
		list_link: false,
		item_repeat: true
	};
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		remove: (activity_id) => {
			const action = {
				type: 'REMOVE_ACTIVITY',
				activity_id: activity_id,
				jar_id: parseInt(ownProps.match.params.jar_id, 10)
			};
			dispatch(action);
		},
		toggle: (activity_id) => {
			dispatch({
				type: 'TOGGLE_REPEAT',
				activity_id: activity_id,
				jar_id: parseInt(ownProps.match.params.jar_id, 10)
			});
		}
	};
}

const ActivityList = connect(mapStateToProps, mapDispatchToProps)(List);

export default ActivityList;
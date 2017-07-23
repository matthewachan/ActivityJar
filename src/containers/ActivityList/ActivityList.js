import { connect } from 'react-redux';

import List from '../../components/List/List';

const mapStateToProps = (state) => {
	return {
		items: state,
		list_type: 'activity_list'
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		remove: (jar_id, activity_id) => {
			dispatch({
				type: 'REMOVE_ACTIVITY',
				activity_id: activity_id,
				jar_id: jar_id
			})
		}
	};
}

const ActivityList = connect(mapStateToProps, mapDispatchToProps)(List);

export default ActivityList;
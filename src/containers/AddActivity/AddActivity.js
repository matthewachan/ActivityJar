import { connect } from 'react-redux';
import hash from 'string-hash';

import Input from '../../components/Input/Input';

const mapStateToProps = (state, ownProps) => {
	const activities = state[ownProps.match.params.jar_id].activities;

	return {
		items: 	Object.keys(activities).map(key => activities[key].activity),
		placeholder: 'Add an activity...'
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		add: (activity) => dispatch({
			type: 'ADD_ACTIVITY',
			activity: activity,
			activity_id: hash(activity),
			jar_id: parseInt(ownProps.match.params.jar_id, 10)
		})
	};
};

const AddActivity = connect(mapStateToProps, mapDispatchToProps)(Input);

export default AddActivity;
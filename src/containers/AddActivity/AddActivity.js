import { connect } from 'react-redux';

import Input from '../../components/Input/Input';

const mapStateToProps = (state, ownProps) => {
	return {
		items: state[ownProps.match.params.jar_id].activities.map(a => a.activity),
		placeholder: 'Add an activity...'
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		add: (activity) => dispatch({
			type: 'ADD_ACTIVITY',
			activity: activity,
			activity_id: 1234,
			jar_id: parseInt(ownProps.match.params.jar_id, 10)
		})
	};
};

const AddActivity = connect(mapStateToProps, mapDispatchToProps)(Input);

export default AddActivity;
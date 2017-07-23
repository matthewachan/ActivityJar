import { connect } from 'react-redux';

import Input from '../../components/Input/Input';

const mapStateToProps = (state) => {
	return {
		labels: state.map(jar => jar.label),
		input_type: 'add_activity'
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		add: (jar_id, activity) => dispatch({
			type: 'ADD_ACTIVITY',
			activity: activity,
			activity_id: 1234,
			jar_id: jar_id
		})
	};
};

const AddActivity = connect(mapStateToProps, mapDispatchToProps)(Input);

export default AddActivity;
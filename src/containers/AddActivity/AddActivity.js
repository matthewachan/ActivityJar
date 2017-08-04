import { connect } from 'react-redux';
import hash from 'string-hash';

import Input from '../../components/Input/Input';

/**
 * Pass a list of activity names down as props
 * @param  {Object} state    Redux store state
 * @param  {Object} ownProps Props of the current component
 * @return {Object}          Props to pass down
 */
const mapStateToProps = (state, ownProps) => {
	const activities = state[ownProps.match.params.jar_id].activities;

	return {
		items: 	Object.keys(activities).map(key => activities[key].activity),
		placeholder: 'Add an activity...'
	};
};

/**
 * Pass the store dispatch function down as props
 * @param  {Function} dispatch Redux dispatch function
 * @param  {Object} ownProps Props of current component
 * @return {Object}          Props to pass down
 */
const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		add: (activity) => {
			let jar_id = parseInt(ownProps.match.params.jar_id, 10);


			global.fetch('http://localhost:8080/jars/' + jar_id + '?activity=' + activity, { method: 'POST' })
			.then(res => res.text()
				.then(data => console.log(data))
			)

			return dispatch({
				type: 'ADD_ACTIVITY',
				activity: activity,
				activity_id: hash(activity),
				jar_id: jar_id
			});
		}
	};
};

const AddActivity = connect(mapStateToProps, mapDispatchToProps)(Input);

export default AddActivity;
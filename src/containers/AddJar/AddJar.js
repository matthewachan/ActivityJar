import { connect } from 'react-redux';
import hash from 'string-hash';

import Input from '../../components/Input/Input';

/**
 * Provide a list of all jar names for input validation
 * @param  {Object} state The Redux store's state
 * @return {Object}       Props to pass down
 */
const mapStateToProps = (state) => {
	return {
		items: Object.keys(state).map(key => state[key].label),
		placeholder: 'Add an activity jar...'
	};
};
/**
 * Map the Redux store's dispatch function to props
 * @param  {Function} dispatch The dispatch function of the Redux store
 * @return {Object}          Return a JSON object containing the props to pass
 */
const mapDispatchToProps = (dispatch) => {
	return {
		add: (jar_label) => {
			global.fetch('http://localhost:8080/jar?label=' + jar_label, { method: 'POST' }) // POST request to add new jar

			return dispatch({
				type: 'ADD_JAR',
				label: jar_label,
				jar_id: hash(jar_label)
			})
		}
	};
};

const AddJar = connect(mapStateToProps, mapDispatchToProps)(Input);

export default AddJar;
import { connect } from 'react-redux';
import hash from 'string-hash';

import Input from '../../components/Input/Input';

const mapStateToProps = (state) => {
	
	return {
		items: Object.keys(state).map(key => state[key].label),
		placeholder: 'Add an activity jar...'
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		add: (jar_label) => dispatch({
			type: 'ADD_JAR',
			label: jar_label,
			jar_id: hash(jar_label)
		})
	};
};

const AddJar = connect(mapStateToProps, mapDispatchToProps)(Input);

export default AddJar;
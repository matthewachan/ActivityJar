import { connect } from 'react-redux';

import Input from '../../components/Input/Input';

const mapStateToProps = (state) => {
	return {
		items: state.map(jar => jar.label),
		placeholder: 'Add an activity jar...'
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		add: (jar_label, id) => dispatch({
			type: 'ADD_JAR',
			label: jar_label,
			jar_id: id
		})
	};
};

const AddJar = connect(mapStateToProps, mapDispatchToProps)(Input);

export default AddJar;
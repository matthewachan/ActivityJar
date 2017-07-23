import { connect } from 'react-redux';

import Input from '../../components/Input/Input';

const mapStateToProps = (state) => {
	return {
<<<<<<< HEAD
		labels: state.map(jar => jar.label),
		input_type: 'add_jar'
=======
		labels: state.map(jar => jar.label)
>>>>>>> f6062eb0fb9211a06dd11b3f8251f7954b6b752f
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		add: (jar_label) => dispatch({
			type: 'ADD_JAR',
			label: jar_label,
			jar_id: 1234
		})
	};
};

const AddJar = connect(mapStateToProps, mapDispatchToProps)(Input);

export default AddJar;
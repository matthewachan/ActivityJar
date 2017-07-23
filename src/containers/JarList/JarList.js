import { connect } from 'react-redux';

import List from '../../components/List/List';

const mapDispatchToProps = (dispatch) => {
	return {
		remove: (id) => dispatch({
			type: 'REMOVE_JAR',
			jar_id: id
		})
	};
};

const mapStateToProps = (state) => {
	// Get all labels from jars array
	return {
<<<<<<< HEAD
		items: state,
		list_type: 'jar_list'
=======
		jars: state
>>>>>>> f6062eb0fb9211a06dd11b3f8251f7954b6b752f
	};
};

const JarList = connect(mapStateToProps, mapDispatchToProps)(List);


export default JarList;
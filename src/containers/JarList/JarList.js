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
		items: state,
		list_type: 'jar_list'

	};
};

const JarList = connect(mapStateToProps, mapDispatchToProps)(List);


export default JarList;
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
	const items = [];
	Object.keys(state).forEach((key) => {
		items.push({
			id: key,
			text: state[key].label
		});
	});
	// Get all labels from jars array
	return {
		items: items,
		list_link: true,
		list_link_path: '/jar/',
		list_type: 'jar_list',
		item_repeat: false
	};
};

const JarList = connect(mapStateToProps, mapDispatchToProps)(List);


export default JarList;
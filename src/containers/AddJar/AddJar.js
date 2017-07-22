import React, { Component } from 'react';
import { connect } from 'react-redux';

import Input from '../../components/Input/Input';

const mapStateToProps = (state) => {
	return {
		labels: state.map(jar => jar.label)
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
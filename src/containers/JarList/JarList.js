import React, { Component } from 'react';
import { connect } from 'react-redux';

import List from '../../components/List/List';

const mapStateToProps = (state) => {
	// Get all labels from jars array
	return {
		jars: state.map(jar => jar.label)
	};
};

const JarList = connect(mapStateToProps, null)(List);


export default JarList;
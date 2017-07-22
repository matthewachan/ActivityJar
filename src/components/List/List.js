import React, { Component } from 'react';

class List extends Component {
	render() {
		return (
			<ul>
				{ this.props.jars.map(label => <li>{label}</li>) }
			</ul>
		);
	}
}
List.contextTypes = {
	store: React.PropTypes.object
};

export default List;
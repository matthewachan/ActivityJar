import React, { Component } from 'react';

class Input extends Component {

	add() {
		let isDuplicate = false;
		
		this.props.labels.map(label => {
			if (label == this.input.value) {
				isDuplicate = true;
			}
		});

		if (isDuplicate) {
			alert('Error: Duplicate value entered');
		}
		else {
			this.props.add(this.input.value);
			this.input.value = '';
		}	
	}

	render() {
		return (
			<div>
				<input ref={node => this.input = node} type='text' placeholder='Add activity jar...'/>
				<button onClick={this.add.bind(this)}>Add</button>
			</div>
		);
	}
}
Input.contextTypes = {
	store: React.PropTypes.object
};

export default Input;
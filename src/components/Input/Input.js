import React, { Component } from 'react';
import './Input.css'

class Input extends Component {

	validateInput() {
		let errorMsg = '';
		
		for (let i = 0; i < this.props.labels.length; i++) {
			if (this.props.labels[i] === this.input.value) {
				errorMsg = 'Error: Duplicate value entered';
				break;
			}
		}

		return errorMsg;
	}

	add() {
		// let errorMsg = this.validateInput();

		// // Error occurred
		// if (errorMsg !== '') 
		// 	alert(errorMsg);
		
		// No error
		// else {
		if (this.props.input_type === 'add_jar') {
			this.props.add(this.input.value.trim());
			
		}
		else {
			this.props.add(parseInt(this.props.match.params.jar_id), this.input.value.trim());

		}
		this.input.value = '';
		// }	
	}

	render() {
		const placeholder = this.props.input_type === 'add_jar' ? 'Add activity jar...' : 'Add activity...';
		return (
			<div className='form-group'>
				<input className='form-control' style={{width: '90%', display: 'inline'}} ref={node => this.input = node} type='text' placeholder={placeholder}/>
				<button className='btn btn-primary' style={{width: '10%' }} onClick={this.add.bind(this)}>Add</button>
			</div>
		);
	}
}
Input.contextTypes = {
	store: React.PropTypes.object
};

export default Input;
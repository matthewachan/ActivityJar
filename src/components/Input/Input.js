import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Input.css';

class Input extends Component {

	validate() {
		let errorMsg = '';
		this.props.items.forEach((item) => {
			if (item === this.input.value.trim())
				errorMsg = 'Error: Duplicate value entered. Please enter a different name.';
		});
		return errorMsg;
	}
	
	addItem(event) {
		event.preventDefault();
		console.log(this.boop);
		let errorMsg = this.validate();
		
		if (errorMsg !== '')
			alert(errorMsg);
		else {
			this.props.add(this.input.value.trim());
			this.input.value = ''
		}
	}

	render() {
		this.boop = 5;
		return (
			<form onSubmit={event => this.addItem(event)}>
				<div className='form-group'>
					<input className='form-control' style={{width: '90%', display: 'inline'}} ref={node => this.input = node} type='text' placeholder={this.props.placeholder}/>
					<button type='submit' className='btn btn-primary' style={{width: '10%'}}>Add</button>
				</div>
			</form>
		);
	}
}
Input.contextTypes = {
	store: PropTypes.object
};

export default Input;
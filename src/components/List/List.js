import React, { Component } from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom'

import './List.css';

class List extends Component {
	render() {
		const listItems = this.props.list_type === 'jar_list' ? this.props.items : this.props.items[this.props.match.params.jar_id].activities;
		
		return (
			<ul className='list-group'>
				{ listItems.map(item => 
					<div className='list-group-item'>
						<li style={{width: '98%', listStyle: 'none'}} key={item.jar_id}>
							 {this.props.list_type === 'jar_list' ? <Link to={'/jar/' + item.jar_id}>{item.label}</Link> : item.activity }
						</li>
						<i onClick={() => this.props.list_type === 'jar_list' ? this.props.remove(item.jar_id) : this.props.remove(parseInt(this.props.match.params.jar_id), item.activity_id)} className='fa fa-trash-o' style={{width: '2%'}} aria-hidden='true'></i>
					</div>
				)}
=======

class List extends Component {
	render() {
		return (
			<ul>
				{ this.props.jars.map(label => <li>{label}</li>) }
>>>>>>> f6062eb0fb9211a06dd11b3f8251f7954b6b752f
			</ul>
		);
	}
}
List.contextTypes = {
	store: React.PropTypes.object
};

export default List;
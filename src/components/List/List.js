import React, { Component } from 'react';
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
			</ul>
		);
	}
}
List.contextTypes = {
	store: React.PropTypes.object
};

export default List;
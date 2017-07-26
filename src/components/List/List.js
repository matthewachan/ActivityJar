import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './List.css';

class List extends Component {
	render() {
		return (
			<ul className='list-group'>
				{ this.props.items.map((item, index) => 
						<div className='list-group-item' key={item.id}>
							<li style={{width: '98%', listStyle: 'none'}}>
								 { this.props.list_link ? <Link to={this.props.list_link_path + item.id}>{item.text}</Link> : item.text }
							</li>
							<i onClick={() => this.props.remove(item.id)} className='fa fa-trash-o' style={{width: '2%'}} aria-hidden='true'></i>
						</div>
				)}
			</ul>
		);
	}
}
List.contextTypes = {
	store: PropTypes.object
};

export default List;
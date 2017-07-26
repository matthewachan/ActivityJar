import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './List.css';

class List extends Component {
	render() {
		return (
			<ul className='list-group'>
				{ this.props.items.map((item, index) => 
						<div className='list-group-item justify-content-between' key={item.id}>
							<li style={{listStyle: 'none'}}>
								 { this.props.list_link ? <Link to={this.props.list_link_path + item.id}>{item.text}</Link> : item.text }
							</li>
							<div>
								{this.props.item_repeat ? <i onClick={() => this.props.toggle(item.id)} className={item.repeat ? 'fa fa-repeat mr-3 text-primary' : 'fa fa-repeat mr-3 text-muted'} aria-hidden='true'></i> : null}<i onClick={() => this.props.remove(item.id)} className='fa fa-trash-o' aria-hidden='true'></i>
							</div>
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
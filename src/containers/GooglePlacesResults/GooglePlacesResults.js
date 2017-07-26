import React, { Component } from 'react';

import Async from 'react-promise';
import PropTypes from 'prop-types';



class GooglePlacesResults extends Component {
    render() {
		const { store } = this.context;
		let promise = () => {
			const activities = store.getState()[this.props.match.params.jar_id].activities;
			let r = Math.floor(Math.random() * activities.length);
			let randActivity = activities[r].activity.toLowerCase();
			let url ='https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.774929,-122.419416&radius=1500&key=AIzaSyBXMLM_kH6IVG8NsBU6KcTvbpHP2oZUgtM&keyword=' + randActivity
			return fetch(url)
    		.then(res => res.json())
		};
    
        return (
            <Async before={(handleProm) => <button className='btn btn-primary'onClick={() => handleProm(promise())}>Click me!</button>} then={(json) => <div>{json.results.map(result => <li>{result.name}</li>)}</div>} />
        );
    }
}

GooglePlacesResults.contextTypes = {
  store: PropTypes.object
};

export default GooglePlacesResults;
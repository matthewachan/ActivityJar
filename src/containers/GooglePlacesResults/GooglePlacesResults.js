import React, { Component } from 'react';

import Async from 'react-promise';
import PropTypes from 'prop-types';

import './GooglePlacesResults.css';

class GooglePlacesResults extends Component {
    before(handlePromise) {
         return (
             <button className='btn btn-primary'onClick={() => handlePromise(this.promise())}>
                Draw an Activity!
             </button>
         );
    }
    
    then(json) {
        return (
            <ul className='list-group'>
                {json.results.map(result => 
                    <li className='media list-group-item'>
                        <div className='d-flex mr-5 img-container'>
                            { result.photos ? <img className='img-thumbnail img-fluid' src={'https://maps.googleapis.com/maps/api/place/photo?maxwidth=250&key=AIzaSyBXMLM_kH6IVG8NsBU6KcTvbpHP2oZUgtM&photo_reference='+result.photos[0].photo_reference} /> : <img className='img-thumbnail img-fluid' src='https://odi.osu.edu/assets/images/ODI/no_photo_icon.png'/>}
                        </div>
                        <div className='media-body'>
                            <h5 className='mt-1 mb-1'>{result.name}&nbsp;</h5>
                            { result.opening_hours && result.opening_hours.open_now ? <p className='text-success'>Open Now</p> : <p className='text-danger'>Closed</p> }
                            <p>Rating: { result.rating ? <span>{result.rating}</span> : <span>None</span> }</p>
                            <p>{result.vicinity}</p>
                        </div>
                    </li>)}
            </ul>
        );
    }
    
    render() {
		const { store } = this.context;
		this.promise = () => {
			const activities = store.getState()[this.props.match.params.jar_id].activities;
			let r = Math.floor(Math.random() * activities.length);
			let randActivity = activities[r].activity.toLowerCase();
			let url ='https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.774929,-122.419416&radius=1500&key=AIzaSyBXMLM_kH6IVG8NsBU6KcTvbpHP2oZUgtM&keyword=' + randActivity
			return fetch(url)
    		.then(res => res.json())
		};
    
        return (
            <Async before={this.before.bind(this)} then={this.then.bind(this)} />
        );
    }
}

GooglePlacesResults.contextTypes = {
  store: PropTypes.object
};

export default GooglePlacesResults;
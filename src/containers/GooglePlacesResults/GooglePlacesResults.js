import React, { Component } from 'react';
import hash from 'string-hash'; 
import Async from 'react-promise';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import geolib from 'geolib';

import './GooglePlacesResults.css';

class Test extends Component {
    
    convertToMiles(meters) {
        return meters / 1609.344;
    }
    
    success(position) {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
    }

    fail(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                alert('User denied the request for Geolocation.')
                break;
            case error.POSITION_UNAVAILABLE:
                alert('Location information is unavailable.')
                break;
            case error.TIMEOUT:
                alert('The request to get user location timed out.')
                break;
            case error.UNKNOWN_ERROR:
                alert('An unknown error occurred.')
                break;
        }
    }
    
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
                {json.results.map((result, index) => 
                    <li key={index} className='media list-group-item'>
                        <div className='d-flex mr-5 img-container'>
                            { result.photos ? <img className='img-thumbnail img-fluid' src={'https://maps.googleapis.com/maps/api/place/photo?maxwidth=250&key=AIzaSyBXMLM_kH6IVG8NsBU6KcTvbpHP2oZUgtM&photo_reference=' + result.photos[0].photo_reference} alt='business' /> : <img className='img-thumbnail img-fluid' src='https://odi.osu.edu/assets/images/ODI/no_photo_icon.png' alt='business' />}
                        </div>
                        <div className='media-body'>
                            <h5 className='mt-1 mb-1'>{result.name}&nbsp;</h5>
                            { result.opening_hours && result.opening_hours.open_now ? <p className='text-success'>Open Now</p> : <p className='text-danger'>Closed</p> }
                            <p>Rating: { result.rating ? <span>{result.rating}</span> : <span>None</span> }</p>
                            <p>Price level: { result.price_level ? <span>{result.price_level}</span> : <span>None</span>} </p>
                            <p>{result.vicinity}</p>
                            <p>{this.convertToMiles(geolib.getDistance({latitude: this.latitude, longitude: this.longitude}, {latitude: result.geometry.location.lat, longitude: result.geometry.location.lng})).toPrecision(1) + ' miles'}</p>
                        </div>
                </li>)}
            </ul>
        );
    }
    
    promise() {
        const { store } = this.context;
        const jar_id = parseInt(this.props.match.params.jar_id, 10);
		const activities = store.getState()[jar_id].activities;
		const keys = Object.keys(activities);
		let r = Math.floor(Math.random() * keys.length);
		let randomActivity = activities[keys[r]].activity;

		// Retrieve client geolocation via HTML5 geolocation API
// 		global.navigator.geolocation.then(() => global.navigator.geolocation.getCurrentPosition(this.success, this.fail))
		
		let url ='https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + this.latitude + ',' + this.longitude + '&radius=1500&key=AIzaSyBXMLM_kH6IVG8NsBU6KcTvbpHP2oZUgtM&keyword=' + randomActivity.toLowerCase()
		console.log(url);
		return global.fetch(url)
		.then(res => {this.props.draw(randomActivity); return res.json();})
    }
    
    render() {
        if (global.navigator.geolocation)
            global.navigator.geolocation.getCurrentPosition(this.success.bind(this), this.fail.bind(this));
        return (
            <Async before={this.before.bind(this)} then={this.then.bind(this)} />
        );
    }
}
Test.contextTypes = {
    store: PropTypes.object
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        draw: (activity) => {
            const action = {
                type: 'DRAW_ACTIVITY',
                jar_id: parseInt(ownProps.match.params.jar_id, 10),
                activity_id: hash(activity).toString()
            };
            dispatch(action);
        }
    }
};
const GooglePlacesResults = connect(null, mapDispatchToProps)(Test);

export default GooglePlacesResults;
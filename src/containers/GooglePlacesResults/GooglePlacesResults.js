import React, { Component } from 'react';
import hash from 'string-hash'; 
import Async from 'react-promise';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import geolib from 'geolib';

import './GooglePlacesResults.css';
import StarRating from '../../components/StarRating/StarRating';
import PriceLevel from '../../components/PriceLevel/PriceLevel';

class Test extends Component {
    constructor(props) {
        super(props);

        this.API_KEY = 'AIzaSyBXMLM_kH6IVG8NsBU6KcTvbpHP2oZUgtM';
    }
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
            default:
                alert('An error occurred.');
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
            <div>
                <div className='mb-2'>
                    Your location: { this.address }
                </div>
            <ul className='list-unstyled list-group'>
                <li className='list-group-item bg-primary'>
                    <h4 className='mt-0 mb-0 media-heading text-white mx-auto'>Google Places</h4>
                </li>   
                {json.results.map((result, index) => 
                    <li key={index} className='media list-group-item align-items-start'>
                        <div className='d-flex mr-5 img-container'>
                            { result.photos ? <img className='business-img img-fluid' src={'https://maps.googleapis.com/maps/api/place/photo?maxwidth=250&key=AIzaSyBXMLM_kH6IVG8NsBU6KcTvbpHP2oZUgtM&photo_reference=' + result.photos[0].photo_reference} alt='business' /> : <img className='business-img img-fluid' src='https://odi.osu.edu/assets/images/ODI/no_photo_icon.png' alt='business' />}
                        </div>
                        <div className='media-body'>
                            <div className='mt-3'>
                                <h5 style={{ display: 'inline' }} className='mt-0 mb-1 media-heading'>{result.name}&nbsp;</h5>
                                <PriceLevel className='badge badge-default pull-right' priceLevel={result.price_level} />
                                <StarRating rating={result.rating} />
                            </div>
                            
                            <div className='mt-4'>
                                <div>{result.vicinity}</div>
                                <div>{this.convertToMiles(geolib.getDistance({latitude: this.latitude, longitude: this.longitude}, {latitude: result.geometry.location.lat, longitude: result.geometry.location.lng})).toPrecision(1) + ' miles'}</div>
                                <div>{ result.opening_hours && result.opening_hours.open_now ? <div className='text-success'>Open Now</div> : <div className='text-danger'>Closed</div> }</div>
                            </div>
                        </div>
                    </li>
                )}
            </ul>
            </div>
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
		if (global.navigator.geolocation)
            global.navigator.geolocation.getCurrentPosition(this.success.bind(this), this.fail.bind(this));
		this.latitude = 37.775899;
		this.longitude = -122.412963;

        let geocoderUrl = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=37.775899,-122.412963&key=' + this.API_KEY;
        global.fetch(geocoderUrl)
        .then(res => {
            res.json().then(data => this.address = data.results[0].formatted_address);
        });
        
		let url ='https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + this.latitude + ',' + this.longitude + '&radius=1500&key=AIzaSyBXMLM_kH6IVG8NsBU6KcTvbpHP2oZUgtM&keyword=' + randomActivity.toLowerCase();
		return global.fetch(url)
		.then(res => {this.props.draw(randomActivity); return res.json();})
    }
    
    render() {
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
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Async from 'react-promise';

class DrawButton extends Component {
    render() {
        return <Async before={(handleProm) => <button onClick={() => handleProm(this.props.promise())}>Click me!</button>} then={(json) => <div>{json.results.map(result => <li>{result.name}</li>)}</div>} />
    }
}

const mapStateToProps = (state, ownProps) => {
    const activities = state[ownProps.match.params.jar_id].activities;
    const randomActivity = activities[Math.floor(Math.random() * activities.length)];
    let url ='https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=37.774929,-122.419416&radius=1500&key=AIzaSyBXMLM_kH6IVG8NsBU6KcTvbpHP2oZUgtM&keyword=' + randomActivity;
    const GooglePromise = () => {
        fetch(url).then(res => res.json())
    };
    return {
      promise: GooglePromise
    };
};

const GooglePlacesResults = connect(mapStateToProps, null)(DrawButton);
export default GooglePlacesResults;
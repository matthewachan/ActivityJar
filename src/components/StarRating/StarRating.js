import React, { Component } from 'react';

import './StarRating.css';

class StarRating extends Component {
    
    generateStars() {
        let stars = [];
        let rating = (Math.round(this.props.rating * 2) / 2).toFixed(1);
        while (stars.length !== 5) {
            // full star
            if (rating >= 1)
                stars.push(<i key={Math.abs(stars.length - 5)} className="fa fa-star text-primary" aria-hidden="true"></i>);
            // half star
            else if (0 < rating && rating < 1)
                stars.push(<i key={Math.abs(stars.length - 5)} className="fa fa-star-half-o text-primary" aria-hidden="true"></i>);
            // empty star
            else
                stars.push(<i key={Math.abs(stars.length - 5)} className="fa fa-star-o text-primary" aria-hidden="true"></i>);
            --rating;
        }
        return stars;
    } 

    render() {
        return (
            <div>
                { this.generateStars() }
            </div>
        );
    }
}

export default StarRating;
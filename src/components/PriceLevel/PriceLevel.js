import React, { Component } from 'react';

import './PriceLevel.css';

class PriceLevel extends Component {
    
    generatePrice() {
        let price = [];
        let priceLevel = this.props.priceLevel;
        if (priceLevel === undefined)
            return;
            
        while (priceLevel !== 0) {
            price.push(<i className="fa fa-usd" aria-hidden="true"></i>)
            --priceLevel;    
        }
        return price;
    }
    
    render() {
        return (
            <div>{ this.generatePrice() }</div>
        );
    }
}

export default PriceLevel;
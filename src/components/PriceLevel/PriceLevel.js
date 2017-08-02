import React, { Component } from 'react';

import './PriceLevel.css';

class PriceLevel extends Component {
    
    generatePrice() {
        let price = [];
        let counter = 0;
        let priceLevel = this.props.priceLevel;
        if (priceLevel === undefined)
            return;
            
        while (priceLevel !== 0) {
            price.push(<i key={counter} className="fa fa-usd" aria-hidden="true"></i>)
            --priceLevel;
            ++counter;
        }
        return price;
    }
    
    render() {
        return (
            <span className={this.props.className} style={this.props.style}>{ this.generatePrice() }</span>
        );
    }
}

export default PriceLevel;
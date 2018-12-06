import React, { Component} from 'react';

class TotalPrice extends Component {

    render(){
        return (
        <div>
        <h2>Total Price</h2>
        <h3>${this.props.noOfPassengersProperty * 100}</h3>
        </div>
        )
    }
}

export default TotalPrice;
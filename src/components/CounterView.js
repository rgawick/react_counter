import React, { Component} from 'react';

export class CounterView extends Component{

    constructor(props) {
        super(props)
        this.state = { 
            counter: 5
        }
    }

    incrementCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
        this.props.incrementProperty(this.state.counter)
    }

    decrementCounter = () => {
        this.setState({
            counter: this.state.counter - 1
        })
        this.props.decrementProperty(this.state.counter)
    }

    render() {
        return (
            <div>
            <button onClick={this.decrementCounter}>-</button>
            <label>{this.state.counter}</label>
            <button onClick={this.incrementCounter}>+</button>
            </div>
        )
    }
}

export default CounterView;
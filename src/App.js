import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CounterView from './components/CounterView'
import TotalPrice from './components/TotalPrice'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = { 
        noOfPassengers: 5
    }
}

  onHandleIncrementFunction = (noOfPassengers) => {
    console.log("IncrementFunction fired...", noOfPassengers)
    this.setState({
        noOfPassengers: noOfPassengers
      }
    )
  }

  onHandleDecrementFunction = (noOfPassengers) => {
    console.log("Decrement Function fired...", noOfPassengers)
    this.setState({
      noOfPassengers: noOfPassengers
    }
  )
  }

  render() {
    return (
      <div>
        <h2>Number of Passengers</h2>
      <CounterView incrementProperty = {this.onHandleIncrementFunction} decrementProperty = {this.onHandleDecrementFunction}/>
      <TotalPrice noOfPassengersProperty =  {this.state.noOfPassengers} />
      </div>
    );
  }
}

export default App;

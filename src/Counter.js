import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    state = { value: 0 }
  
  inc = () => {
    this.setState((state) => {
    return { value: state.value + 1 }
    })
  }
  dec = () => {
    this.setState((state) => {
      return { value: state.value - 1 }
      })
    }
  render() {
    const { value } = this.state;
    return (
      <div className="App">
        <div>
          <h2>{value}</h2>
          <button onClick={this.inc}>+</button>
          <button onClick={this.dec}>-</button>
          </div>
      </div>
    );
  }
}

export default App;
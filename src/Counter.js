import React, { Component } from 'react';
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
    const { name } = this.props;
    return (

        <div style={{backgroundColor: name, color: 'white' }}>
          <h1>{name} counter </h1>
          <h2>{value}</h2>
          <button onClick={this.inc}>+</button>
          <button onClick={this.dec}>-</button>
        </div>

    );
  }
}

export default App;
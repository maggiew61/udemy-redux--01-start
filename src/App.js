import React, { Component } from 'react';

import Counter from './containers/Counter/Counter';
import Test from './containers/Counter/Test';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Counter />
       <Test />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

import Books from '../src/components/Books/Books'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Books />
      </div>
    );
  }
}

export default App;

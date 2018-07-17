import React, { Component } from 'react';
import './App.css';
import SearchContainer from './components/SearchContainer';

import gif from '../public/img/chuck-gif.gif' // relative path to image

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Chuck Norris</h1>
            <img src={gif} alt={""} />
        </div>
      <div class="container">
          <SearchContainer />
      </div>
      </div>
    );
  }
}

export default App;

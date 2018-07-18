import React, { Component } from 'react';
import './App.css';
import SearchContainer from './components/SearchContainer';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Chuck Norris Search</h1>
        </div>
      <div className="container">
          <SearchContainer />
      </div>
      </div>
    );
  }
}

export default App;

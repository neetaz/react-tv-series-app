import React, { Component } from 'react';
import './App.css';
import Main from '../Main';
//import Series from "../../containers/Series";
import 'whatwg-fetch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TV Series List</h1>
        </header>        
        {/* <Series /> */}
        <Main />
      </div>
    );
  }
}

export default App;

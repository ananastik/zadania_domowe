import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter.js';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Licznik z ustawianym krokiem w ReactJS
          </h1>
        </header>
        <Counter initValue='10'/>
      </div>
    );
  }
}

export default App;

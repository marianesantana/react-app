import React, { Component } from 'react';
import logo from './mariane-react.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Mariane Santana
          </p>
          <a
            className="App-link"
            href="https://www.facebook.com/mariane.santana.94064"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            className="App-link"
            href="https://www.linkedin.com/in/mariane-s-9998a3133/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="App-link"
            href="https://twitter.com/amarianesantana"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
          <a
            className="App-link"
            href="https://github.com/marianesantana"
            target="_blank"
          >
            Github
          </a>
        </header>
      </div>
    );
  }
}

export default App;

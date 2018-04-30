import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import FirstScreen from './Components/FirstScreen';
import Features from './Components/Features';
import Reviews from './Components/Reviews';
import DownLoadComp from './Components/DownLoadComp';
import Footer from './Components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-lightblue">
          <a className="navbar-brand" href="#">FUN WHEATER.</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>
          </div>
        </nav>
        <FirstScreen />
        <Features />
        <Reviews />
        <DownLoadComp />
        <Footer />
      </div>
    );
  }
}

export default App;

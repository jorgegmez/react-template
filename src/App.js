import React, { Component } from 'react';
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
          <a className="navbar-brand" href="#">FUN WEATHER.</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto navFooter">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Reviews</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Download</a>
              </li>
            </ul>
            <nav className="navFooter">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#"><i className="fab fa-facebook-f"></i></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><i className="fab fa-instagram"></i></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#"><i className="fab fa-twitter"></i></a>
                </li>
              </ul>
            </nav>
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

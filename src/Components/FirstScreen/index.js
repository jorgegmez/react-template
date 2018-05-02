import React, { Component } from 'react';
import phone from '../../img/phone.png';


// Styles
import '../../App.css';

class FirstScreen extends Component {
  render () {
    return (
      <div className="FirstScreen-div">
        <div className="Left-div">
          <h2 className="FirstScreen-title text-left">Get the most fun weather app</h2>
          <p className="Text-left-FS text-left">Simple, nice and user-friendly application of the weather. Only useful informaction</p>
          <button id="btn-download" className="Btn-Divleft btn btn-sm">Download</button>
          <button id="btn-features" className="Btn-Divleft btn btn-primary btn-sm">Features</button>
        </div>
        <div className="Right-div">
          <img src={phone} className="Img-phone" alt="phone" />
          <a id="Circule-sunny" className="DivRight-circules">Sunny</a>
          <a id="Circule-london" className="DivRight-circules">London</a>
          <a id="Circule-rio" className="DivRight-circules">Rio</a>
          <a id="Circule-9" className="DivRight-circules">9˚</a>
        </div>
        <div className="DivCenter">
          <a id="Circule-angleDown" className="DivCenter-angleDown">
            <i className="fas fa-angle-down"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default FirstScreen;

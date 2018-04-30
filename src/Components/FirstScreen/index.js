import React, { Component } from 'react';


// Styles
import '../../App.css';

class FirstScreen extends Component {
  render () {
    return (
      <div className="FirstScreen-div">
        <div className="Left-div">
          <h2 className="FirstScreen-title text-left">Get the most fun weather app</h2>
          <p className="Text-left-FS text-left">Simple, nice and user-friendly application of the weather. <br/> Only useful informaction</p>
        </div>
        <div className="Right-div">
          <h2 className="FirstScreen-title text-left">Get the most fun weather app</h2>
          <p className="Text-left-FS text-left">Simple, nice and user-friendly application of the weather.</p>
          <p className="Text-left-FS text-left">Only useful informaction</p>
        </div>
      </div>
    );
  }
}

export default FirstScreen;

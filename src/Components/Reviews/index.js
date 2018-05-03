import React, { Component } from 'react';

// Styles
import '../../App.css';

class Reviews extends Component {
  render () {
    return (
      <div className="Reviews-div">
        <h1 className="Reviews-title">What people are saying</h1>
        <h2 className="Reviews-subtitle">Reviews</h2>
        <div className="row">
          <div className="Reviews-divLeft">
            <p>“</p>
            <p>What art offers is space - a certain breathing room for the spirit.</p>
            <p>“</p>
            <small>John Updike</small>
          </div>
          <div className="Reviews-divRight">
            <p>“</p>
            <p>What art offers is space - a certain breathing room for the spirit.</p>
            <p>“</p>
            <small>John Updike</small>
          </div>
        </div>
      </div>
    );
  }
}

export default Reviews;

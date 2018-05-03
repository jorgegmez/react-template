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
            <p className="Opening-quotes">“</p>
            <p className="Reviews-text">What art offers is space - a certain breathing room for the spirit. <br/> <small className="Reviews-smallText">John Updike</small></p>
            <p className="Closing-quotes">”</p>
          </div>
          <div className="Reviews-divRight">
            <p className="Opening-quotes">“</p>
            <p className="Reviews-text">No man has a good enough memory to be a successful liar. <br/> <small className="Reviews-smallText">Abraham Lincoln</small></p>
            <p className="Closing-quotes">”</p>
          </div>
        </div>
        <div className="row">
          <div className="Reviews-divLeft">
            <p className="Opening-quotes">“</p>
            <p className="Reviews-text">The only courage that matters is the kind that gets you from one moment to the next. <br/> <small className="Reviews-smallText">Mignon McLaughlin</small></p>
            <p className="Closing-quotes">”</p>
          </div>
          <div className="Reviews-divRight">
            <p className="Opening-quotes">“</p>
            <p className="Reviews-text">We do not see nature with our eyes, but with our understandings and our hearts.<br/> <small className="Reviews-smallText">William Hazlitt</small></p>
            <p className="Closing-quotes">”</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Reviews;

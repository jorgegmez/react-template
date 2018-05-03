import React, { Component } from 'react';

// Styles
import '../../App.css';

class Footer extends Component {
  render () {
    return (
      <div className="Footer-div">
        <nav id="Footer-navBar">
           <ul className="Links-container">
           <a id="Footer-brand"><spam id="Fun-text">Fun</spam> Weather</a>
            <li className="Nav-item items">
              <a>Home</a>
            </li>
            <li className="Nav-item items">
              <a>Features</a>
            </li>
            <li className="Nav-item items">
              <a>Reviews</a>
            </li>
            <li className="Nav-item items">
              <a>Download</a>
            </li>
           </ul>
           <nav id="Footer-navBar2">
           <ul className="Links-container">
            <li className="Nav-item items">
              <a><i className="fab fa-facebook-f"></i></a>
            </li>
            <li className="Nav-item items">
              <a><i className="fab fa-instagram"></i></a>
            </li>
            <li className="Nav-item items">
              <a><i className="fab fa-twitter"></i></a>
            </li>
           </ul>
           </nav>
         </nav>
      </div>
    );
  }
}

export default Footer;

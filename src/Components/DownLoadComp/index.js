import React, { Component } from 'react';

// Img
import phoneClear from '../../img/phoneClear.png';
import phoneRight from '../../img/phoneLeft.png';
import phoneLeft from '../../img/phoneRight.png';
import playstore from '../../img/googleplay.png';
import appstore from '../../img/appstore.png';

// Styles
import '../../App.css';

class DownLoadComp extends Component {
  render () {
    return (
      <div className="DownLoadComp-div">
        <div className="row">
          <div className="Download-divLeft">
            <h1 className="Download-title">How Download the app?</h1>
            <p className="Download-text">Just download the app from the store. Simple, nice and user-friendly application of theweather. Only relevant and useful information</p>
            <img src={playstore} alt="Google Play" className="Download-app"/>
            <img src={appstore} className="Download-app" alt="App Store"/>
          </div>
          <div className="Download-divRight">
            <img className="Download-phoneLeft" src={phoneLeft} alt="phone"/>
            <img className="Download-phoneClear" src={phoneClear} alt="phone"/>
            <img className="Download-phoneRight" src={phoneRight} alt="phone"/>
          </div>
        </div>
      </div>
    );
  }
}

export default DownLoadComp;

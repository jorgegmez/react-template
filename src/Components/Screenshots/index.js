import React, { Component } from 'react';

// Img
import screenCloudy from '../../img/SCREENCloudy.png';
import screenSunny from '../../img/SCREENSunny.png';
import screenRainy from '../../img/SCREENRainy.png';
import iconCloudy from '../../img/iconCloudy.png';
import iconSunny from '../../img/iconSunny.png';
import iconRainy from '../../img/iconRainy.png';

// Styles
import '../../App.css';

class Screenshot extends Component {
  render () {
    return (
      <div className="Screenshots-div">
        <h1 className="Screenshots-title">Screenshots</h1>
        <h2 className="Screenshots-subtitle">The brightest images</h2>
        <div className="row">
          <div className="col-sm-6 Screenshot-divLeft">
            <p className="Text-vertical">Cloudy</p>
            <img src={screenCloudy} alt="cloudy" className="Img-screenCloudy" />
            <a id="Cloudy-circule" className="Cloudy-circule">Cloudy</a>
            <a id="Circule-15" className="Circule-15">15˚</a>
          </div>
          <div className="col-sm-6 Screenshot-divRight">
            <img src={iconCloudy} alt="iconCloudy" className="iconCloudy"/>
            <h3 className="Title-divRight">When the clouds</h3>
            <p className="Text-divRight">Variable information on the air humidity, the feeling of the weather, and ability to share this with your friends</p>
          </div>
        </div>
        {/*Another row*/}
        <div className="row">
          <div className="col-sm-6 Screenshot-divLeft divL">
          <img src={iconSunny} alt="iconCloudy" className="iconSunny"/>
            <h3 className="Title-divLeft">When the sun</h3>
            <p className="Text-divLeft">Variable information on the air humidity, the feeling of the weather, and ability to share this with your friends</p>
          </div>
          <div className="col-sm-6 Screenshot-divRight divR">
          <p className="Text-verticalSunny">Sunny</p>
            <img src={screenSunny} alt="cloudy" className="Img-screenSunny" />
            <a id="Sunny-circule" className="Sunny-circule">Sunny</a>
            <a id="Circule-35" className="Circule-35">15˚</a>
          </div>
        </div>
        {/*Another row*/}
        <div className="row">
          <div className="col-sm-6 Screenshot-divLeft">
            <p className="Text-verticalRainy">Rainy</p>
            <img src={screenRainy} alt="cloudy" className="Img-screenCloudy" />
            <a id="Rainy-circule" className="Rainy-circule">Rainy</a>
            <a id="Circule-9-2" className="Circule-9-2">9˚</a>
          </div>
          <div className="col-sm-6 Screenshot-divRight">
            <img src={iconRainy} alt="iconCloudy" className="iconCloudy"/>
            <h3 className="Title-divRight">When the rain</h3>
            <p className="Text-divRight">Variable information on the air humidity, the feeling of the weather, and ability to share this with your friends</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Screenshot;

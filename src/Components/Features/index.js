import React, { Component } from 'react';
import iconD from '../../img/iconD.png';
import iconP from '../../img/iconP.png';
import iconC from '../../img/iconC.png';

// Styles
import '../../App.css';

// Components
import Widgets from '../Widgets';
import Screenshot from '../Screenshots';

class Features extends Component {
  render () {
    return (
      <div className="Features-div">
        <h1 className="Features-title">Perfect Features</h1>
        <h2 className="Features-subtitle">Only necessary</h2>
        <div className="row">
          <div className="divCol4">
            <div className="ColDiv-1">
              <img src={iconD} className="iconD" alt="icon"/>
            </div>
            <div className="ColDiv-2">
              <h3 className="Title-columns">Usability </h3>
              <p className="Text-columns">Sometimes the simplest things are the hardest to find. So we createda new line for everyday life.</p>
            </div>
          </div>
          <div className="col-sm-4 divCol4">
            <div className="ColDiv-1">
              <img src={iconP} className="iconP" alt="icon"/>
            </div>
            <div className="ColDiv-2">
              <h3 className="Title-columns">Parallax Effect </h3>
              <p className="Text-columns">Sometimes the simplest things are the hardest to find. So we createda new line for everyday life.</p>
            </div>
          </div>
          <div className="col-sm-4 divCol4">
            <div className="ColDiv-1">
              <img src={iconC} className="iconC" alt="icon"/>
            </div>
            <div className="ColDiv-2">
              <h3 className="Title-columns">Unlimites Colors </h3>
              <p className="Text-columns">Sometimes the simplest things are the hardest to find. So we createda new line for everyday life.</p>
            </div>
          </div>
        </div>
        <Widgets />
        <Screenshot />
      </div>
    );
  }
}

export default Features;

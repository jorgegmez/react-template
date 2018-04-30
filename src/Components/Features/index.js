import React, { Component } from 'react';

// Styles
import '../../App.css';

// Components
import Widgets from '../Widgets';
import Screenshots from '../Screenshots';

class Features extends Component {
  render () {
    return (
      <div className="AddTask-form">
        <h3>This is Features component!</h3>
        <Widgets />
        <Screenshots />
      </div>
    );
  }
}

export default Features;

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Map } from 'react-avapi';

class App extends Component {
  render() {
    return (
      <Map confId='%CONF_ID%'
           lat='41.38605'
           lng='2.17014'
           zoom='13' />
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
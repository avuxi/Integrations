import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Lse } from 'react-avapi';

class App extends Component {
  render() {
    return (
      <Lse confId='%CONF_ID%'
           lat='41.390847'
           lng='2.16902' />
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);

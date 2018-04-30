import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Lse } from 'react-avapi';

class App extends Component {
  render() {
    return (
      <Lse confId='5ae6e03da93f4e1e02a6122b'
           lat='41.390847'
           lng='2.16902' />
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);

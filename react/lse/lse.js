import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Lse from '../lse.js';

class App extends Component {
  render() {
    return (
      <Lse confId='5ae6df87a93f4e1e02a6122a'
           lat='41.38605'
           lng='2.17014' />
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);

import React, { Component } from 'react';

import './App.scss';
import { Header, Restaurants } from './components';

class App extends Component {
  render() {
    return (
      <div>
        <Header heading="Restaurant Finder" />
        <Restaurants />
      </div>
    );
  }
}

export default App;

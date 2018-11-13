import React, { Component } from 'react';
import './App.css';
import Home from './Home.js';

import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            user: 'Ivan',
            name: ' Jose'
        };
    }
  render() {
    return <Home user={this.state.user} name={this.state.name}/>
  }
}

export default App;

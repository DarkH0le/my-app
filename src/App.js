import React, { Component } from 'react';
import './App.css';
import Home from './Home.js';

import 'bootstrap/dist/css/bootstrap.css';
import Welcome from "./Welcome";

class App extends Component {

    constructor() {
        super();
        this.state = {
            user: null,
            name: ' Jose'
        };
    }
  render() {
    return (
        <div>

            {this.state.user && <Welcome user={this.state.user} />}
            <Home user={this.state.user} name={this.state.name}/>
        </div>
    );
  }
}

export default App;

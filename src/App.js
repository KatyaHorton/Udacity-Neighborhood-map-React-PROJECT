import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import MapContainer from './MapContainer.js'
import ListContainer from './ListContainer.js'

class App extends Component {
  render() {
    return (
      <div>
       <MapContainer />
	   <ListContainer />
      </div>
    );
  }
}

export default App;

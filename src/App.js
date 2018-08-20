import React, { Component } from 'react';
import './App.css'
import MapContainer from './MapContainer.js'
import ListContainer from './ListContainer.js'
import { GoogleApiWrapper } from 'google-maps-react'

class App extends Component {
  render() {
    return (
      <div>
       <MapContainer
		google={this.props.google} 
		/>
	   <ListContainer />
      </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: ('AIzaSyC-qQFJpin2n9dhMsENQ0n6P34eZkix0h8')
})(App)

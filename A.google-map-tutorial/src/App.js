import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import MapContainer from './components/MapContainer.js'
import * as FoursquareDataAPI from './components/FoursquareDataAPI.js'


class App extends Component {
	
	state = {
		locations: [],
		defaultCenter: { lat: 51.5, lng: 0 }, 
        defaultZoom: 13 
	}
	
  componentDidMount() {
//after component mounts check for errors
		function handleErrors(response) {
			if (response.ok) {
				throw Error(response.statusText);
			}
			return response;	
		}
//update state of locations with the data fetched from Foursquare API		
		 FoursquareDataAPI.getAllPlaces()
			 .then((locations) => {
			 this.setState({locations})
		 }).catch((error) => {
			 alert('Sorry! Error occurred whilst loading data from FourSquare API. Locations data will not be displayed ')
		 })
	}
	
  render() {
	  console.log('Locations:', this.state.locations);
    return (
      <div id="main">
		
		<header id="header">
          <img src={logo} id="header-logo" alt="header-logo" />
          <h1 className="App-title">Restaurants in Greenwich</h1>
        </header>
        
		<MapContainer
		 defaultCenter = {this.state.defaultCenter }
		 defaultZoom = { this.state.defaultZoom }
		/>
		
		
      </div>
    );
  }
}
export default App;

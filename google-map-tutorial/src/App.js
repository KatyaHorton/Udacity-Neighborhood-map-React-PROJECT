import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import MapContainer from './components/MapContainer.js'
import SearchContainer from './components/SearchContainer.js'
import * as FoursquareDataAPI from './components/FoursquareDataAPI.js'


class App extends Component {
	
	state = {
		locations: [],
		defaultCenter: { lat: 51.48, lng: -0.001 },
		newCenter: {},
        defaultZoom: 14
	}
	
  componentDidMount() {
//after component mounts check for errors
/*		function handleErrors(response) {
			if (response.ok) {
				throw Error(response.statusText);
			}
			return response;	
		}  */
//update state of locations with the data fetched from Foursquare API		
		 FoursquareDataAPI.getAllPlaces()
			 .then((locations) => {
			 this.setState({locations})
		 }).catch((error) => {
			 alert('Sorry! Error occurred whilst loading data from FourSquare API. Locations data will not be displayed ')
		 })
	}


/* ------------------------- FUNCTIONS TO HANDLE EVENTS ------------------------- */

//function for the items in the list or marker in the map clicked	  
	  handleChildClickEvent = (smth, location) => {
		  console.log(location)
	  }
	  
	  
	
  render() {
	  console.log('Locations:', this.state.locations );
    return (
      <div id="main">
		
		<header id="header">
          <img src={logo} id="header-logo" alt="header-logo" />
          <h1 className="App-title">Restaurants in Greenwich</h1>
        </header>
{/* passing props and states to MapContainer */}
		<MapContainer
				locations = { this.state.locations }
				defaultCenter = { this.state.defaultCenter }
				defaultZoom = { this.state.defaultZoom }
				handleChildClickEvent = { this.handleChildClickEvent }
		 		googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyC-qQFJpin2n9dhMsENQ0n6P34eZkix0h8&v=3.exp&libraries=geometry,drawing,places`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div id="map-container" style={{ height: `600px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
		
		/>
		
		<SearchContainer 
			locations = { this.state.locations }
			handleChildClickEvent = { this.handleChildClickEvent }
		/>
      </div>
    );
  }
}
export default App;

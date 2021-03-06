import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import MapContainer from './components/MapContainer.js'
import SearchContainer from './components/SearchContainer.js'
import * as FoursquareDataAPI from './components/FoursquareDataAPI.js'



class App extends Component {
	
	state = {
		locations: [],
		locationsToUse: [],
		locationsNotFound: false,
		newCenter: { lat: 51.49, lng: -0.005 },
		zoom: 14,
		isOpen: false,
		selectedLocation: {},
		query: ''

	}
	
  componentDidMount() {
	  function handleErrors(response) {
			if (response.ok) {
				throw Error(response.statusText);
			}
			return response;	
		} 
//update state of locations with the data fetched from Foursquare API		
		 FoursquareDataAPI.getAllPlaces().then(handleErrors)
			 .then((locations) => {
			 this.setState({locations: locations,
							locationsToUse: locations
						   })
		 }).catch((error) => {
			 alert('Sorry! Error occurred whilst loading data from FourSquare API. Locations data will not be displayed ')
		 })
	  
	}


/* ------------------------- FUNCTIONS TO HANDLE EVENTS ------------------------- */

//function for the items in the list or marker in the map clicked	  
	  handleChildClickEvent = (smth, location, id) => {
		  

		  
		  if(location !== undefined) {
		  this.setState({
			  newCenter: {lat: location.lat, lng: location.lng },
			  zoom: 17, 
			  isOpen: true, 
			  selectedLocation: id
		  })
			  
			  
	  }}
	  
	  
//updates locations depending on the search 
	  updateLocations = (searchResultArr, query) => {
    if(searchResultArr) {
      this.setState((state) => ({
          locationsToUse: searchResultArr,
		  zoom: 14, 
		  newCenter: { lat: 51.48, lng: -0.001 },
		  locationsNotFound: false
      }))
    	
	} else  {

		this.setState({
			locationsToUse: this.state.locations,
			locationsNotFound: false
		})
	
			
   } 

  }
	  
		updateQuery = (query) => {
			this.setState({
			query: query
		})
	}	  
	  

	  
	  
  render() {
	  console.log('Locations:', this.state.locations )
	  console.log('USING:', this.state.locationsToUse )
    return (
      <div id="main">
		
		<header id="header">
          <img src={logo} id="header-logo" alt="header-logo" />
          <h1 className="App-title">Restaurants in Greenwich</h1>
        </header>
{/* passing props and states to MapContainer */}
		<MapContainer
				selectedLocation = { this.state.selectedLocation }
				locations = { this.state.locationsToUse }
				locationsNotFound = { this.state.locationsNotFound }
				newCenter = { this.state.newCenter }
				zoom = { this.state.zoom }
				handleChildClickEvent = { this.handleChildClickEvent }
				isOpen = { this.state.isOpen }
		 		googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyC-qQFJpin2n9dhMsENQ0n6P34eZkix0h8&v=3.exp&libraries=geometry,drawing,places`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div id="map-container" aria-label="map container" tabIndex="0" role="application" style={{ height: `700px` }} />}
				mapElement={<div style={{ height: `100%` }} />}

		/>
		
		<SearchContainer 
			locations = { this.state.locations }
			locationsToUse = { this.state.locationsToUse }
			locationsNotFound = { this.state.locationsNotFound }
			handleChildClickEvent = { this.handleChildClickEvent }
			selectedLocation = { this.state.selectedLocation }
			onUserDidSearch= { this.updateLocations }
		/>
		
			<div id='footer-container'>
				<div id='footer-info'>
		This application was developed by @KatyaHorton.
		Data used from  
		<a href="https://developer.foursquare.com/" tabIndex={0} 
          		 	aria-label="Link to four square API developer site"> Foursquare API.</a></div>
			</div>
      </div>
		
    );
  }
}
export default App;

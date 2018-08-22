import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Map from './components/Map.js'
import * as FoursquareDataAPI from './components/FoursquareDataAPI.js'


class App extends Component {
	
	
	state = {
		locations: []
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
			 alert('Sorry! Error occured whils loading data from FourSquare API. Locations data will not be displayed ')
		 })
	}
	
  render() {
	  console.log('Locations:', this.state.locations);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Restaurants in Greenwich</h1>
        </header>
        <Map />
		
		
      </div>
    );
  }
}
export default App;

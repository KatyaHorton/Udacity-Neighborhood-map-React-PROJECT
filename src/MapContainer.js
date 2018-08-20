import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'

class MapContainer extends Component {

  render() {
    return (
      <div id='map-container'>
       
   	  <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            
        </InfoWindow>
      </Map>		
		
      </div>
		
		
    )
  }
}


export default GoogleApiWrapper({
  apiKey: ('AIzaSyC-qQFJpin2n9dhMsENQ0n6P34eZkix0h8')
})(MapContainer)

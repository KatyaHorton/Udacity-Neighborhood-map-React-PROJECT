import React, { Component } from 'react'
import { Map } from 'google-maps-react'

class MapContainer extends Component {
  render() {
    return (
      <div id='map-container'>
       
   	  	<Map google={this.props.google} 
			 zoom={11}
			 initialCenter={{
				lat: 51.4826,
				lng: 0
		}}
		
		styles = {styles}

			 >
		</Map>		
		
      </div>
		
		
    )
  }
}


export default MapContainer


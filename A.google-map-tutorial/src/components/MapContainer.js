import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

class MapContainer extends Component  {
	
   render() {
	   
   const Map = withGoogleMap(props => (
      
	   <GoogleMap
        defaultCenter = { this.props.defaultCenter }
        defaultZoom = { this.props.defaultZoom }
      >   
      </GoogleMap>
   ));
	   
	   
   return(
      <div>
        <Map
          containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
}; 
export default MapContainer;
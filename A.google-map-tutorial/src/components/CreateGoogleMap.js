import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';


//dear Eman, I am slightly lost in that component, I see that you are using only const in your CompositeGoogleMap.js file. 
//It works like that but I feel smth is not right 
// if you could suggest smth, I will be very grateful
//feels like smth dublicates itself
//thank you very much

class CreateGoogleMap extends Component {
	
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
export default CreateGoogleMap;
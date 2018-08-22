import React, { Component } from 'react';
import CreateGoogleMap from './CreateGoogleMap.js';

class Map extends Component {
	
	
   render() {
	   
   return(
      <div>
        <CreateGoogleMap
            defaultCenter = { this.props.defaultCenter }
        	defaultZoom = { this.props.defaultZoom }
        />
      </div>
   )
   }
};
export default Map;
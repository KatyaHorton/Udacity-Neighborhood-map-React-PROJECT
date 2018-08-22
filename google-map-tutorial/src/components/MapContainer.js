import React, { Component } from 'react';
//imports ‘withGoogleMap’ (a Higher Order Component)
//‘GoogleMap’ (which is going to take in map props)
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import MarkersContainer from './MarkersContainer'


const MapContainer = withScriptjs(withGoogleMap((props) =>{

let defaultCenter = props.defaultCenter;
let defaultZoom = props.defaultZoom;
	
const markers = props.locations.map( location => 
									<MarkersContainer
									location = {{ lat: location.location.lat, lng: location.location.lng }}
									key={location.id}
												  />
)	


	
	return (
		<GoogleMap
			defaultZoom={ defaultZoom }
       		defaultCenter = { defaultCenter }
		>
		{ markers }
		</GoogleMap>
		
	)
	
})
)

export default MapContainer;
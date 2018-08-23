import React from 'react';
//imports ‘withGoogleMap’ (a Higher Order Component)

import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import MarkersContainer from './MarkersContainer'


const MapContainer = withScriptjs(withGoogleMap((props) =>{


const markers = props.locations.map( currentLocation => 
									<MarkersContainer
										selectedLocation = { props.selectedLocation }
										location = {{ lat: currentLocation.location.lat, lng: currentLocation.location.lng }}
										key={currentLocation.id}
										name = {currentLocation.name}
										isOpen = {props.isOpen}
										checkId = { currentLocation.id }
										address = { currentLocation.location.formattedAddress}
										onClick={(event) => props.handleChildClickEvent(event, currentLocation.location, currentLocation.id)}
									/>
)	
	return (
 
		<GoogleMap
			zoom ={ props.zoom }
       		center = { props.newCenter }
		>
		{ markers }

		</GoogleMap>
		
	)
	
})
)

export default MapContainer;
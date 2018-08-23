import React from 'react';
//imports ‘withGoogleMap’ (a Higher Order Component)
//‘GoogleMap’ (which is going to take in map props)
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import MarkersContainer from './MarkersContainer'


const MapContainer = withScriptjs(withGoogleMap((props) =>{


const markers = props.locations.map( currentLocation => 
									<MarkersContainer
										location = {{ lat: currentLocation.location.lat, lng: currentLocation.location.lng }}
										key={currentLocation.id}
										name = {currentLocation.name}
										onClick={(event) => props.handleChildClickEvent(event, currentLocation.location, currentLocation.id)}
									/>
)	
	return (
 
		<GoogleMap
			zoom ={ props.zoom }
       		center = { props.newCenter }
		>
		{ markers }
								  {console.log('Mapcontainer return:', props.locations)}
		</GoogleMap>
		
	)
	
})
)

export default MapContainer;
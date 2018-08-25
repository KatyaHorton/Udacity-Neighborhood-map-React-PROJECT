import React, { Component } from 'react';
import { Marker, InfoWindow, withScriptjs, withGoogleMap, GoogleMap  } from "react-google-maps"

class MarkersContainer extends Component  {
	
	
    render() {
		
        return (

            <Marker
				position = { this.props.location }
				name = { this.props.name }
				onClick={ this.props.onClick }
				address = { this.props.address }
				selectedLocation = { this.props.selectedLocation }

			animation = { (this.props.selectedLocation === this.props.checkId)  && ( window.google.maps.Animation.BOUNCE )}
				>	
	
	{ (this.props.selectedLocation === this.props.checkId ) && 
	  (<InfoWindow 
	   	onCloseClick = {(event) => 
		
		{alert('smth has to happen here so infowindow can ber reopened')}
		
	}>
						<div className='info-window'>
								<span className='info-window-name'>{ this.props.name || 'Ooopsy! Google the name, please :)'}
								</span><br/>
								{ this.props.address  || 'Ooopsy! Google the address, please :)' } 
						</div>
      				</InfoWindow> )}
            </Marker> 
        )
    } 
	
}

export default MarkersContainer
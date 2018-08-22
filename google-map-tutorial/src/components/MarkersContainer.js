import React, { Component } from 'react';
import { Marker, InfoWindow } from "react-google-maps"


//ASSIGN INFOWINDOW MARKER  IN THE SAME WAY AS WE ASSIGNED  MARKER TO MAP

class MarkersContainer extends Component  {
 
	
    render() {
        return (
            <Marker
				position = { this.props.location }
				name = { this.props.name }
				onClick={ this.props.onClick }
				>			
            </Marker>
        )

    }

}

export default MarkersContainer
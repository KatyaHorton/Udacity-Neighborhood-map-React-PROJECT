import React, { Component } from 'react';
import { Marker } from "react-google-maps"

class MarkersContainer extends Component  {
 
    render() {
        return (
            <Marker
				position = {this.props.location}
				name = {this.props.name }
            >
			
            </Marker>
        )

    }

}

export default MarkersContainer
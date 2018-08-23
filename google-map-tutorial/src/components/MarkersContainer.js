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
				address = { this.props.address }
				>	
			
			{console.log(this.props.isOpen)}

//set
	{ (this.props.isOpen) && (<InfoWindow >
						<div className='info-window'>
								<span className='info-window-name'>{ this.props.name }
								</span><br/>
								{ this.props.address } 
						</div>
      				</InfoWindow> )}
            </Marker>
        )
    } 
	
}

export default MarkersContainer
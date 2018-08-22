import React from "react"
import { Marker, InfoWindow } from "react-google-maps"

class MarkersContainer extends Component  {
 
    getInitialState() {
        return { showInfoWindow: false }
    }

    render() {
 console.log('hello')
        const { marker } = this.props

        return (
            <Marker
                {...marker}
                onClick={(e) => { this.setState({ showInfoWindow: true }) }}
            >
                { this.state.showInfoWindow ?
                    <InfoWindow onCloseclick={(e) => { this.setState({ showInfoWindow: false }) }}>
                        //content
                    </InfoWindow>
                    : null
                }
            </Marker>
        )

    }

}

export default MarkersContainer
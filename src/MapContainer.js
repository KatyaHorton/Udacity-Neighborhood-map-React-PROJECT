import React, { Component } from 'react'
import { Map } from 'google-maps-react'


const styles = [
			  {
				  featureType: 'road',
				  stylers: [
					 { color: '#f7efdc'},
					 { lightness: -20 }, 
					 { visibility: 'simplified'}
				  ]
			  },
			  {
				  featureType: 'water',
				  stylers: [
					  { color: '#59a0b2' }, 
					  { lightness: 35	 }
				  ]
			  },{
				  featureType: 'landscape', 
				  elementTyoe: 'geometry.stroke',
				  stylers: [
					  { color: '#f7efdc'},
					  { lightness: 20 }
				  ]
			  },{
				  featureType: 'poi.park', 
				  stylers: [
					   { color: '#98b354'},
					  { lightness: 60 }, 
					  { visibility: 'simplified'}
					  
				  ]				  
			  },{
				  featureType: 'all', 
				  elementType: 'labels.text.fill', 
				  stylers: [
					  { color: '#8d492d'}
				  ]  
			  }
		  ];	

class MapContainer extends Component {
  render() {
    return (
      <div id='map-container'>
       
   	  	<Map google={this.props.google} 
			 zoom={11}
			 initialCenter={{
				lat: 51.4826,
				lng: 0
		}}
		
		styles = {styles}

			 />
			
		
      </div>
		
		
    )
  }
}


export default MapContainer


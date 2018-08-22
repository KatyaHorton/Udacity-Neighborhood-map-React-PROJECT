import React, { Component } from 'react';


class SearchContainer extends Component {
	
	render(){
		return(
			<div id='search-container'>
				<input 
					id="search-input" 
					type="text" 
					placeholder="What exactly do you fancy?"/>
				<div id='search-results'>
					<ol>
			
			
			{this.props.locations.map(location => (
		
		<li>{location.name}</li>
		)
		
		)}
			
			
					</ol>
				</div>
			</div>
		)
	}
}




export default SearchContainer;
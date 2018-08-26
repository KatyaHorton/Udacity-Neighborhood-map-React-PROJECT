import React, { Component } from 'react';
import sortBy from 'sort-by'
import escapeRegExp from 'escape-string-regexp'


class SearchContainer extends Component {
	
		state = {
			query: '',
			locationsSearchResult: []
	}

		updateQuery = (query) => {
			this.setState({
			query: query
		})
	}

		searchLocations = (query) => {
		let filteredLocations
		let locations = this.props.locations
		let locationsHasItems = false 
		let result ={}
		
		if(locations !== undefined && locations !== null && locations.length > 0) {
			locationsHasItems = true
			locations.sort(sortBy('name'))
		}
			
		if (query) {
		const match = new RegExp(escapeRegExp(query.trim()), 'i')
		if (locationsHasItems) {
				filteredLocations = locations.filter((location) => match.test((location.name)))
		}	
		}
			
						
		if (query.length == 0) {
			filteredLocations = locations
		} 


		result = {locationsHasItems: locationsHasItems	, filteredLocations: filteredLocations}
			
		
		return result
		}
		

			handleTextChange = (query, event) => {
				this.updateQuery(query)
				let result = this.searchLocations(query)
				this.props.onUserDidSearch(result.filteredLocations, query)
				this.setState({locationsSearchResult: result.filteredLocations})
		
		}
		
	render(){
		
		return(
			<div id='search-container'>
				<input 
					id="search-input" 
					type="text" 
					placeholder="What exactly do you fancy?"
					aria-label="Enter the name of the place you search"
					onChange = {(event) => this.handleTextChange(event.target.value, event)}
			/>
				<div id='search-results'>
					<ul 
						id='search-results-list' 
						aria-label='List of restaurants in Greenwich area'
						tabIndex="0" 
						role="list"
					>
						
							
						{((!this.props.locationsNotFound) && (this.props.locations.map(location => (
							<li key={location.id}
								tabIndex="0" 
								role="listitem"
								onClick={(event) => this.props.handleChildClickEvent(event, location.location, location.id)}
							>
							{location.name}<br/>
								{(this.props.selectedLocation === location.id ) && <span className='search-items-address'>
								Type of place: {location.categories[0].name}
							</span> } 
			</li>
		)
		)))
				} 


					</ul>
			
					
				</div>
			</div>
		)
	}
}




export default SearchContainer;
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

	clearQuery = () => {
		this.state({
			query: ''
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
		} else {
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
					onChange = {(event) => this.handleTextChange(event.target.value, event)}
			/>
				<div id='search-results'>
					<ol id='search-results-list'>
						
						{((!this.props.locationsNotFound) && (this.props.locations.map(location => (
							<li key={location.id}
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

					{((this.props.locationsNotFound) && (<div>Search results not found</div>)	)}
		
					</ol>
			
					
				</div>
			</div>
		)
	}
}




export default SearchContainer;
import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			term: '',
			location: '',
			sortBy: 'best_match',
		};
		this.sortByOptions = {
			'Best Match': 'best_match',
			'Highest Rated': 'rating',
			'Most Reviewed': 'review_count',
		}
		this.handleSortByChange = this.handleSortByChange.bind(this);
		this.handleTermChange = this.handleTermChange.bind(this);
		this.handleLocationChange = this.handleLocationChange.bind(this);
		this.handleSearch = this.handleSearch.bind(this);
	}
	getSortByClass(sortByOption) {
		if(this.state.sortBy === sortByOption) {
			return 'active'
		}
		return '';
	}
	handleSortByChange(sortByOption) {
		this.setState({
			sortBy: sortByOption
		});
	}
	handleTermChange(event) {
		const { value } = event.target;
		this.setState({ term: value});
	}
	handleLocationChange(event) {
		const { value } = event.target;
		this.setState({ location: value});
	}
	handleSearch(event) {
		event.preventDefault();
		const { term, location, sortBy } = this.state;
		this.props.onClick(term, location, sortBy);
	}
	renderSortByOptions() {
		return Object.keys(this.sortByOptions)
			.map(sortByOption => {
				let sortByOptionValue = this.sortByOptions[sortByOption];
				return (
					<li 
						className={this.getSortByClass(sortByOptionValue)}
						onClick={() => this.handleSortByChange(sortByOptionValue)}
						key={sortByOptionValue}>
						{sortByOption}
					</li>);
			});
	}

	render() {
		return (
			<div className="SearchBar">
				<div className="SearchBar-sort-options">
					<ul>
						{this.renderSortByOptions()}
					</ul>
				</div>
				<div className="SearchBar-fields">
					<input onChange={this.handleTermChange} placeholder="Search Business" type="text"/>
					<input onChange={this.handleLocationChange} placeholder="Where?" type="text"/>
				</div>
				<div className="SearchBar-submit">
					<a onClick={this.handleSearch}>Let's Go</a>
				</div>
			</div>
		);
	}
}

export default SearchBar;
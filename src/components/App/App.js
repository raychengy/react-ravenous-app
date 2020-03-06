import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import BusinessList from '../BusinessList/BusinessList';
import { search } from '../../util/Yelp';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			businesses: []
		};
		this.searchYelp = this.searchYelp.bind(this);
	}
	searchYelp(term, location, sortBy) {
		search(term, location, sortBy)
			.then(businesses => {
				this.setState({ businesses });
			})
	}
	render() {
		return (
			<div className="App">
				<h1>ravenous</h1>
				<SearchBar onClick={this.searchYelp} />
				<BusinessList businesses={this.state.businesses}/>
			</div>
		);
	}
}

export default App;
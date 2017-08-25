import React, {Component} from 'react';

class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = {term:''};
	}

	onInputChange(term){
		//setState to see what we typed
		this.setState({term:term});
		this.props.onSearchTermChange(term);
	}

	render(){
		return(
			<div className="search-bar">
				<form>
					<p>{this.state.value}</p>
					<input 
						type="text"
						value={this.state.term} 
						onChange={(event) => this.onInputChange(event.target.value)} />
				</form>
			</div>
		);
	}
}
export default SearchBar;
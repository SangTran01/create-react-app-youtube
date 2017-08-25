import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ListContainer from './ListContainer';
import VideoDetail from './VideoDetail';
import axios from 'axios';
import _ from 'lodash';

const API_KEY = 'AIzaSyATK7iHd7XEPnTumNY1p9nF9GhBd-4Wryg';
//'https://www.googleapis.com/youtube/v3/search?part=snippet&q=puppies&key=AIzaSyATK7iHd7XEPnTumNY1p9nF9GhBd-4Wryg'

// YTSearch({key:API_KEY,term:'surfboards'}, function(data){
// 	console.log(data);
// })


class App extends Component {
	constructor(props){
		super(props);

		this.state = {
			videos:[],
			selectedVideo:null
		}

		this.videoSearch('surfboards');
	}

	//must trigger when searchbar input changes
	videoSearch(term) {
		axios.get('https://www.googleapis.com/youtube/v3/search?' +
			'part=snippet&' +
			'q=' + term + '&' +
			'maxResults=10&' +
			'order=viewCount&' +
			'key='+ API_KEY)
		.catch(error => console.log('BAD', error))
		.then((response) => {
			console.log(response.data.items);
			this.setState({
				videos:response.data.items, 
				selectedVideo:response.data.items[0]});
		});
	}

	render(){
		const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);


		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch}/>
				<VideoDetail video={this.state.selectedVideo} />
				<ListContainer
				videos={this.state.videos}
				onVideoSelect={selectedVideo => this.setState({selectedVideo:selectedVideo})}/>
			</div>
		);
	}
}

export default App;

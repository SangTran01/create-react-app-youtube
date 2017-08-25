import React from 'react';
import ListItem from './ListItem';

// pass videos
const ListContainer = (props) => {
	const videos = props.videos.map((video) => {
		return	<ListItem  
			key={video.etag}
			video={video}
			onVideoSelect={props.onVideoSelect} />
	});

	return(
		<ul className="col-md-4 list-group">
			{videos}
		</ul>
	);
}

export default ListContainer;
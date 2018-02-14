import React from 'react';
import { Link } from 'react-router';

import Photo from './Photo';
import Comments from './Comments';

//import comments from '../data/comments';

class Single extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		// post index
		const postId = this.props.params.postId;
		const i = this.props.posts.findIndex((post)=>post.code === postId);
		const post = this.props.posts[i];
		const postComments = this.props.comments[postId] || [];
		console.log(post)
		return(
			<div className = "single-photo">
				<Photo i={i} post={post} {...this.props}/>
				<Comments postComments= {postComments} {...this.props}/>
			</div>
		)
	}
}

export default Single;
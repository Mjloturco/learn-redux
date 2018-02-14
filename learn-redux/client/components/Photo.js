import React from 'react';
import {Link} from 'react-router'
import CSSTransitionGroup from 'react-addons-css-transition-group';

class PhotoCaption extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		// just shortens syntax for later use of props ,get to cut 'this.props' from 'this.props.post.code'
		const{post, i ,comments} = this.props; 
		return(
				<figcaption>
					<p>{post.caption}</p>
					<div className="control-buttons">
						<button onClick={this.props.increment.bind(null,i)} className="likes">
							&hearts;{post.likes}
						</button>
						<Link className="button" to = {`/view/${post.code}`}>
							<span className="comment-count">
								<span className="speech-bubble"></span>
								{comments[post.code] ? comments[post.code].length : 0}
							</span>
						</Link>
					</div>
				</figcaption>
		)
	}
}

class Photo extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		// just shortens syntax for later use of props ,get to cut 'this.props' from 'this.props.post.code'
		const{post, i ,comments} = this.props; 
		return(
			<figure className = "grid-figure">
				<div className = "grid-photo-wrap">
					<Link to = {`/view/${post.code}`}>
						<img src = {post.display_src} alt = {post.caption} 
						className = "grid-photo"/>
					</Link>
					<CSSTransitionGroup transitionName="like"
						transitionEnterTimeout={500}
						transitionLeaveTimeout={500}>
						<span key={post.likes} className="likes-heart">
							{post.likes}
						</span>
					</CSSTransitionGroup>
				</div>
				<PhotoCaption {...this.props}/>
			</figure>
		)
	}
}


export default Photo;
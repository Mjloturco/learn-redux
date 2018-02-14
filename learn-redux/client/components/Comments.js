import React from 'react';

class Comment extends React.Component{
	constructor(props){
		super(props);
	}
	handleRemoveComment(event){
		const postId = this.props.params.postId;
		const index = this.props.index;
		this.props.removeComment(postId,index);
	}
	render(){
		const comment = this.props.comment;
		//const comment.
		return(
			<div className = "comment">
				<strong>{comment.user}</strong>
				{comment.text}
				<button className="remove-comment" onClick={this.handleRemoveComment.bind(this)}>&times;</button>
			</div>
		)
	}
}

class Comments extends React.Component{
	constructor(props){
		super(props);
	}
	handleSubmit(event){
		event.preventDefault(); //prevents the page from refreshing, refresh unneeded since state update with trigger react to update dom
		console.log(this.refs);// the refs defined on inputs below.
		const postId = this.props.params.postId;
		const author = this.refs.author.value;
		const comment = this.refs.comment.value;
		this.props.addComment(postId, author, comment);
		this.refs.commentForm.reset();
	}
	render(){
		return(
			<div className = "comments">
				{this.props.postComments.map((comment,index)=>(<Comment key={index} comment={comment} index={index} {...this.props}/>))}
				<form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
					<input type="text" ref="author" placeholder="author"/>
					<input type="text" ref="comment" placeholder="comment"/>
					<input type="submit" hidden/>
				</form>
			</div>
		)
	}
}
//<Comment />
export default Comments;
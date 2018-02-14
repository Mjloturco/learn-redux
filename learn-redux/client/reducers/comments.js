// create reducer handling 2 things
// action
// copy of current state

function postComments(state = [], action){
	switch (action.type){
		case 'ADD_COMMENT':
			//return existing state plus new comment
			return[
				...state,
				{
					user: action.author,
					text: action.comment
				}
			];
		default: 
			return state;
	}

	console.log(state,action);
	return state;
}

function removeComments(state = [], action){
	switch (action.type){
		case 'REMOVE_COMMENT':
			console.log('removing action ',action);
			return[
				...state.slice(0 , action.index),
				...state.slice(action.index + 1)
			];
		default: 
			return state;
	}

	console.log(state,action);
	return state;
}

function comments(state = [], action){
	switch (action.type){
		case 'ADD_COMMENT':
			return Object.assign({},state,{
				[action.postID]:postComments(state[action.postId],action)
			});
			// {
			// 	...state,
			// 	[action.postID]:postComments(state[action.postId],action)
			// }
		case 'REMOVE_COMMENT':
			return Object.assign({},state,{
				[action.postID]:removeComments(state[action.postId],action)
			});
			// {
			// 	...state,
			// 	[action.postID]:removeComments(state[action.postId],action)
			// }
		default: 
			return state;
	}
}



export default comments;
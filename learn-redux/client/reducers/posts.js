// create reducer handling 2 things
// action
// copy of current state
import ACTION_TYPES from '../actions/actionCreators';

function posts(state = [], action){
	const i = action.index;
	// if action.type = ACTION_TYPES.
	switch(action.type){
		case 'INCREMENT_LIKES':
		//return the updated state
			console.log("changing post: ", action)
			// var newstate = Object.assign({}, state);
			// newstate.posts[action.i].likes++;
			return [
			...state.slice(0,i),
			{...state[i], likes: state[i].likes+1},
			...state.slice(i+1),
			];
		default: 
			return state;
	}
	var newstate = Object.assign({}, state);
	newstate.posts[action.i].likes++;
	return state;
}

export default posts;
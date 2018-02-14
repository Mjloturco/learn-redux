//increment
export const ACTION_TYPES=['INCREMENT_LIKES','ADD_COMMENT','ADD_COMMENT',]



export function increment(index){
	return {
		type:'INCREMENT_LIKES',
		index
	}
}


// add comment

export function addComment(postId, author, comment){
	console.log('dispatch add comment')
	return {
		type:'ADD_COMMENT',
		postId,
		author,
		comment,
	}
}

//remove comment
export function removeComment(postId, index){
	return {
		type:'REMOVE_COMMENT',
		postId,
		index,
	}
}



// getEntitlements
// function getEntitlements(index){
// 	return {
// 		type:'FETCH_ENTITLEMENTS_START',
// 		username_or_email
// 	}
// }

// addEntitlement


// updateEntitlement

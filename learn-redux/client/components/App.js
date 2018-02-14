import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state){
	return{
		posts: state.posts,
		comments: state.comments
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps,
	mapDispatchToProps)(Main);//takes all the props and data from state and dispatch and maps them to main.



export default App;
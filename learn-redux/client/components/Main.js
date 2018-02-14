import React from 'react';
import { Link } from 'react-router';

class Main extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
				<h1>
					<Link to="/">Mikestagram</Link>
				</h1>
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}
}


// const MainComponent = React.createClass{
// 	render(){
// 		return(
// 			<div>
// 				<h1>
// 					<Link to="/">Mikestagram</Link>
// 					{React.cloneElement(this.props.children, this.props)}
// 				</h1>
// 			</div>
// 		)
// 	}
// }

export default Main;
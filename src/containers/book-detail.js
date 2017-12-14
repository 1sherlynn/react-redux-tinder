import React, { Component } from 'react'; 
import { connect } from 'react-redux'; //Connect to store: STEP 1/3

class BookDetail extends Component {
	render() {
		return (
			<div>Book Detail!</div>
			); 
	}
}

//Connect to store: STEP 2/3
function mapStateToProps(state) {
	return {
		book: state.activeBook //refer to reducers/index.js properties to refer to the piece of state
	}; 
}

//Connect to store: STEP 3/3
export default connect(mapStateToProps)(BookDetail); 
// connect(function)(component) and it produces a container, which is aware of the state contained by redux 
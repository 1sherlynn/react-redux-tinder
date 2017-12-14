import React, { Component } from 'react'; 
import { connect } from 'react-redux'; //Connect to store: STEP 1/3

class BookDetail extends Component {
	render() {
		if (!this.props.book) {
			return <div>Select a book to get started.</div>
		}
		return (
			<div>
				<h3>Details for:</h3>
				<div><b>Title: </b>{this.props.book.title}</div>
				<div><b>Pages: </b>{this.props.book.pages}</div>
			</div>
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
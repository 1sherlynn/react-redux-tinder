import React, { Component } from 'react'; 
import { connect } from 'react-redux'; //import connect function from react-redux

class BookList extends Component {
	renderList() {
		return this.props.books.map( (book) => {
			return (
				<li key={book.title} className="list-group-item">{book.title}</li>
			);
		});
	}
	
	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
			)
	}
}

function mapStateToProps(state) {
// this function is the glue between react and redux 
// takes in the application state as an arguement 
// whatever gets returned from here will show up as props inside of BookList container above 
	return {
		books: state.books
	}; 
}

export default connect(mapStateToProps)(BookList); 
// connect(function)(component) and it produces a container, which is aware of the state contained by redux 



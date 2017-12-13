export function selectBook(book) {
	// selectBook is an ActionCreator, it needs to return an action, an object with type property
	return {
		type: 'BOOK_SELECTED', 
		//type is always in uppercase and usually a string
		payload: book 
		// piece of data that describes more information about the action undertaken 
	}; 
}
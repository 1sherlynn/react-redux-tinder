// State argument is not application state, only the state this reducer is responsible for 
export default function(state = null, action) {
	switch(action.type) {
	case 'BOOK_SELECTED': 
		return action.payload; 
	}
	return state; 
}

// In the above, if the action has a type matching 'BOOK_SELECTED', return action.payload (book), 
// If the action is anything else, return the current state

// All reducers get 2 arguments: state and action 
// When we boot the app up and the user has not clicked on anything, undefined will be returned
// Redux does not allow us to return undefined and will throw an error
// We have to set default state a null (above) 

// Important to never muatate our current state to provide a new version of the state 
// The object that we return from our reducer should always be 100% fresh and clean 

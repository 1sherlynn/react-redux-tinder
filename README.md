# Redux (Udemy Stephen Grider)

- **Redux** is the data contained in the application 
- **React** is the views contained in the application 

#### Difference with other libraries like Angular, Backbone and Flux: ####
- Redux: centralized data in a single object referred to as the **state** (application level state containing all the data of the application)
- Whereas other libraries has several collections. e.g. Backbone has collections and Flux hgit as different stores. 

_______________________________________________

### Reducers

- A **reducer** is a **function** that returns a piece of the application's state 
- Because an application can have many different pieces of state, we can have many different reducers 
- Application State: generated by Reducers 
1. Create and export a reducer (we have to export in order to use it in other parts of our application)

```
reducer_books.js:
...
export default function() {
	return [
		{ title: 'Javascript: The Good Parts' }, 
		{ title: "Harry Potter" }, 
		{ title: "The Dark Tower" },
		{ title: "Eloquent Ruby" }
	]
}
```

2. Wire it to our Application 
- in index.js: 
```
import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'; 

const rootReducer = combineReducers({
	books: BooksReducer
});

export default rootReducer;

```

_______________________________________________












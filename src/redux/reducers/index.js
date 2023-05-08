import { combineReducers } from 'redux';
import notesReducer from './notesReducer'; // reducer for notes

export default combineReducers({notes: notesReducer});




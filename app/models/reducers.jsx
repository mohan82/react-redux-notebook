import {combineReducers} from 'redux';

import {PageNumber} from './PageNumber.jsx';
import {Note} from './Note.jsx'

console.log(PageNumber);
export const reducers = combineReducers({pageActionReducer:PageNumber.Reducers.pageActionReducer,
noteActionReducer:Note.Reducers.noteActionReducer})

import {combineReducers} from 'redux';

import {PageNumber} from './PageNumber.jsx';

console.log(PageNumber);
export const reducers = combineReducers({pageActionReducer:PageNumber.Reducers.pageActionReducer})

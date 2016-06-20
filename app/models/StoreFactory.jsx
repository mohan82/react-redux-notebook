import {reducers} from './reducers.jsx';
import {createStore} from 'redux'
import StatePersistence from './StatePersistence.jsx'


export const store = createStore(reducers, new StatePersistence().getState());
store.subscribe(()=> {
    console.log('Persisting state...')
    new StatePersistence().persistState(store.getState());
});

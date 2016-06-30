/**
 * Created by Dotan on 30-Jun-16.
 */
import {createStore , combineReducers} from 'redux';
import counter from '../reducers/counter.redux.js';

const  reducers = combineReducers({counter});

const store = createStore(reducers);

store.subscribe(()=>{
   console.log(store.getState());
});


console.log(store.getState());


export default store;

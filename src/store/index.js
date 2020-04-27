import { createStore, combineReducers } from 'redux';

//导入reducer
import appReducer from '../reducer/appReducer.js';
import countReducer from '../reducer/countReducer.js';

//构建store 

const reducer = {
    first: appReducer,
    second: countReducer
}

const store = createStore(combineReducers(reducer));

export default store;
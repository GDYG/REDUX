import { createStore, combineReducers, applyMiddleware } from 'redux';

//导入reducer
import appReducer from '../reducer/appReducer.js';
import countReducer from '../reducer/countReducer.js';
//使用redux-thunk
import thunk from 'redux-thunk';
import { thunkReducer } from '../reducer/thunkReducer.js'

//使用redux-saga
import {mySaga} from './sagas.js'; //使用saga时开启
import {reduxSaga} from '../reducer/reduxSaga.js'; //使用saga时开启
import createSagaMiddleware from 'redux-saga'; //使用saga时开启
const sagaMiddleware = createSagaMiddleware(); //使用saga时开启
//构建store 

const reducer = {
    first: appReducer,
    second: countReducer,
    three: thunkReducer,
    four: reduxSaga
}

// const store = createStore(combineReducers(reducer), {}, applyMiddleware(sagaMiddleware)); //使用saga时开启
const store = createStore(combineReducers(reducer), {}, applyMiddleware(thunk));

// sagaMiddleware.run(mySaga) //使用saga时开启

export default store;
import { createStore, combineReducers, applyMiddleware } from 'redux';

//导入reducer
import appReducer from '../reducer/appReducer.js';
import countReducer from '../reducer/countReducer.js';
//使用redux-thunk
import thunk from 'redux-thunk';
import { thunkReducer } from '../reducer/thunkReducer.js'

//使用redux-saga
// import sagas from './sagas.js';
// import createSagaMiddleware from 'redux-saga';
// const sagaMiddleware = createSagaMiddleware();
//构建store 

const reducer = {
    first: appReducer,
    second: countReducer,
    three: thunkReducer
}

const store = createStore(combineReducers(reducer), applyMiddleware(thunk));

// sagaMiddleware.run(sagas)

export default store;
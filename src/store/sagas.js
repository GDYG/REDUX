import { takeEvery, select, put, call } from 'redux-saga/effects'

function* test() {
    // var state = yield select(state => state.four) // select辅助函数，获取state,同getState
    // console.log(state)
    try {
        // const res = yield call(axios.post, 'http://127.0.0.1:3000/products',{payload:payload})
        // const res = yield select(state => state.four)
        yield put({type: 'req_status'})
        yield setTimeout(() => {
        }, 3000);
        yield put({type: 'req_success'})
    } catch(error) {
        yield put({type: 'req_error', err: '错误信息'})
    }
}

export function* mySaga() {
    yield takeEvery('saga_type', test)
}

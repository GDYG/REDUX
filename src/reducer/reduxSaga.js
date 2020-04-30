export const reduxSaga = (state = {msg: 'redux_saga', status: 0}, action)=>{
    switch(action.type){
        case 'saga_type':
            return JSON.parse(JSON.stringify(state))
        case 'req_status':
            const news = JSON.parse(JSON.stringify(state))
            news.status = 1
            return news;
        case 'req_success':
            const res = JSON.parse(JSON.stringify(state))
            res.status = 2
            return res;
        case 'req_error':
            const newState = JSON.parse(JSON.stringify(state))
            newState.status = 3
            newState.msg = action.err
            return newState;
        default: 
            return state;
    }
}
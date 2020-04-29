const initState = {
    message: '异步的redux',
    flag: false
}

export const thunkReducer = (state= initState, action) =>{
    switch(action.type) {
        case 'thunk-type':
            const obj  = JSON.parse(JSON.stringify(state))
            obj.message = action.message
            obj.flag = false
            return obj;
        case 'flag_type':
            const objs  = JSON.parse(JSON.stringify(state))
            objs.flag = true
            return objs;
        default: 
            return state;
    }
}
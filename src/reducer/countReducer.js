const initState = {
    count: 0
}

const countReducer = (state=initState, action) =>{
    switch(action.type) {
        case 'add_action':
            return Object.assign({}, state, {count: state.count + 1})
        default:
            return state;
    }
}

export default countReducer;
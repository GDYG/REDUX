
 const initState = {
    data: [
       '第一个',
       '第二个',
       '第三个'
     ],
     inputValue: 'write something'
}

const appReducer = (state = initState, action) => {
    console.log(action)
     switch(action.type) {
        case 'send_type':
            if(!action.value) return state;
            var obj = JSON.parse(JSON.stringify(state))
            obj.data.push(action.value)
            obj.inputValue = ''
            return obj;
        case 'send_value':
            var obj1 = JSON.parse(JSON.stringify(state))
            obj1.inputValue = action.value
            return obj1;
        default: 
        return state;
     } 
 }

 export default appReducer;
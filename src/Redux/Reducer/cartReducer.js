
const cartReducer = (state=[],action)=>{
    switch(action.type){
        case "addCart": 
        return [...state,...action.payload]
        case "fetchCart":
            return [...state]
            case "updateCart":
                return [...action.payload]
        default:return state
    }
}

export default cartReducer
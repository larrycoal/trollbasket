import {product} from '../../Utils/data'

const productReducer = (state=product,action)=>{
    switch(action.type){
        case "fetchProduct": 
        return {
            ...state
        }
        default:return state
    }
}

export default productReducer
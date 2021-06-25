import {combineReducers} from 'redux'
import productReducer from './Reducer/productReducer'
import cartReducer from './Reducer/cartReducer'

const reducer = combineReducers({
    products:productReducer,
    cart:cartReducer
})

export default reducer
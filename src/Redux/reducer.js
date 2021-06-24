import {combineReducers} from 'redux'
import productReducer from './Reducer/productReducer'


const reducer = combineReducers({
    products:productReducer
})

export default reducer
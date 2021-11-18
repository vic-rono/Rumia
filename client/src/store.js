import { addProductReviewReducer , deleteProductReducer, getAllProductsReducer, getProductByIdReducer,addProductReducer, updateProductReducer } from "./reducers/productReducer"
import { cartReducer } from './reducers/cartReducer'
import { registerNewUserReducer, loginReducer, updateReducer, getAllUsersReducer, deleteUserReducer } from './reducers/userReducer'
import { placeOrderReducer, getOrdersByUserIdReducer, getOrderByIdReducer, getAllOrdersReducer } from './reducers/orderReducer'
import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    getAllProductsReducer : getAllProductsReducer, 
    getProductByIdReducer : getProductByIdReducer,
    cartReducer : cartReducer,
    registerNewUserReducer : registerNewUserReducer,
    loginReducer : loginReducer,
    placeOrderReducer: placeOrderReducer,
    getOrdersByUserIdReducer: getOrdersByUserIdReducer,
    getOrderByIdReducer : getOrderByIdReducer,
    addProductReviewReducer : addProductReviewReducer,
    updateReducer: updateReducer,
    getAllUsersReducer : getAllUsersReducer,
    deleteUserReducer :deleteUserReducer,
    deleteProductReducer : deleteProductReducer,
    addProductReducer : addProductReducer,
    updateProductReducer : updateProductReducer,
    getAllOrdersReducer: getAllOrdersReducer
});

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null

const initialState = {
    cartReducer : {cartItems : cartItems},
    loginReducer: {currentUser : currentUser}
}
const composeEnhancers = composeWithDevTools({
    
  });

const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(thunk)
));


export default store

//npm i redux-thunk
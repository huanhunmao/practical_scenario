// **设计一个简单的Redux Store**：
//    创建一个Redux Store，包含至少两个Reducer，以及对应的Action Creators，处理用户登录状态和购物车商品数量的变化
const Redux = require('redux');

// 定义 Action Types
const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGIN_OUT_USER'
const UPDATE_CART_CONT = 'UPDATE_CART_CONT'

// Action creator
const loginUser = () => {
    return {
        type: LOGIN_USER
    }
}

const logoutUser = () => {
    return {
        type: LOGOUT_USER
    }
}

const updateCartCount = (count) => {
    return {
        type: UPDATE_CART_CONT,
        payload: count
    }
}

// Reducers

// user
const initialUserState = {
    loggedIn: false,
}

const userReducer = (state = initialUserState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                loggedIn: true,
            }
        case LOGOUT_USER:
            return {
                ...state,
                loggedIn: false,
            }
        default:
            return state
    }
}

// cart
const initialCartState = {
    itemCount: 0,
}

const cartReducer = (state = initialCartState, action) => {
    switch(action.type){
        case UPDATE_CART_CONT: 
            return {
                ...state,
                itemCount: action.payload,
            }
        default:
            return state
    }
}


// Combine Reducers
const { combineReducers, createStore } = Redux
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
})

// store
const store = createStore(rootReducer)


// 测试 action creators
console.log(store.getState()) // { user: { loggedIn: false }, cart: { itemCount: 0 } }

store.dispatch(loginUser())
console.log(store.getState()); // { user: { loggedIn: true }, cart: { itemCount: 0 } }

store.dispatch(updateCartCount(10))
console.log(store.getState()); // { user: { loggedIn: true }, cart: { itemCount: 10 } }

store.dispatch(logoutUser())
console.log(store.getState()); // { user: { loggedIn: false }, cart: { itemCount: 10 } }

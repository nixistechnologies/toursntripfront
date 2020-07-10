import { combineReducers } from 'redux'
import packageReducer from './packageReducer';
// import billReducer from './bill';
// import loginReducer from './login';
// import userReducer from './user';
export default combineReducers({
    packages:packageReducer,
    // bills:billReducer,
    // user:userReducer,
    // login:loginReducer,
})

// export default products;
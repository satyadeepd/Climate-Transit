import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import UserReducer from './reducers/userReducer';


const rootReducer = combineReducers({
    user: UserReducer
});

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk));
}

export default configureStore;
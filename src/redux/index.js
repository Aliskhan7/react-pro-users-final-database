import thunk from "redux-thunk";
import {applyMiddleware, combineReducers, createStore} from "redux";
import { createLogger } from 'redux-logger';
import albomsReducer from "./albom";
import usersReducer from "./user";

const logger = createLogger({
    diff: true,
    collapsed: true
})

const rootReducer = (combineReducers({
    users: usersReducer,
    alboms: albomsReducer
}))

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

export default store
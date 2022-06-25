import { createStore, combineReducers, applyMiddleware } from "redux"
import { createLogger } from "redux-logger"
import thunkMiddleware from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../redux/user"
import homeReducer from "../redux/home"
import authReducer from "../redux/auth";
import userProfileReducer from "../redux/userProfile"


export default configureStore({
  reducer: {
    user: userReducer,
    allProfiles: homeReducer,
    auth: authReducer,
    profile: userProfileReducer
  },
})

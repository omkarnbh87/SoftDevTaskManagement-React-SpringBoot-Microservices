import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import authReducer from "./AuthSlice";
import TaskSlice from "./TaskSlice";
import submissionSlice from "./SubmissionSlice";
const rootReducer = combineReducers({
  auth: authReducer,
  task: TaskSlice,
  submission: submissionSlice,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
export default store;

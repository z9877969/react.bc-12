// import { createStore, combineReducers } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
import { transactionsReducer } from "./transactions/transactionsReducer";

// const reducer = (state = [], action) => state;

// const rootReducer = combineReducers({
//   transactions: transactionsReducer,
//   a: reducer,
//   b: (state = true, action) => state,
// });

// const store = createStore(rootReducer, composeWithDevTools());

const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
  },
});

export default store;

import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { transactionsReducer } from "./transactions/transactionsReducer";

const reducer = (state = [], action) => state;

const rootReducer = combineReducers({
  transactions: transactionsReducer,
  a: reducer,
  b: (state = true, action) => state,
});

const store = createStore(rootReducer, composeWithDevTools());
console.log("~ store", store);

export default store;

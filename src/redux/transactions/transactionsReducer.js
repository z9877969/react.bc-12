// import { combineReducers } from "redux";
import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { addCosts, addIncomes } from "./transactionsActions";
// const costsReducer = (state = [], action) => {
//   switch (action.type) {
//     case "transactions/addCosts":
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };
const costsReducer = createReducer([], {
  [addCosts]: (state, action) => [...state, action.payload],
});

// const incomesReducer = (state = [], action) => {
//   switch (action.type) {
//     case "transactions/addIncomes":
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };
const incomesReducer = createReducer([], {
  [addIncomes]: (state, action) => [...state, action.payload],
});

const transactionsReducer = combineReducers({
  costs: costsReducer,
  incomes: incomesReducer,
});

export { transactionsReducer };

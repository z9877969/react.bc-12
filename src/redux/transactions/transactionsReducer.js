// import { combineReducers } from "redux";
import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  addCosts,
  addIncomes,
  getCosts,
  getIncomes,
  removeCosts,
} from "./transactionsActions";
// const costsReducer = (state = [], action) => {
//   switch (action.type) {
//     case "transactions/addCosts":
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };
const costsReducer = createReducer([], {
  [addCosts]: (state, { payload }) => [...state, payload],
  [getCosts]: (_, { payload }) => payload,
  [removeCosts]: (state, { payload }) =>
    state.filter((item) => item.id !== payload),
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
  [addIncomes]: (state, { payload }) => [...state, payload],
  [getIncomes]: (_, { payload }) => payload,
});

const transactionsReducer = combineReducers({
  costs: costsReducer,
  incomes: incomesReducer,
});

export { transactionsReducer };

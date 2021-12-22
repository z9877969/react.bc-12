// import { combineReducers } from "redux";
import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  addCosts,
  addIncomes,
  getCosts,
  getIncomes,
  removeCosts,
  editCosts,
  editIncomes,
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
  [editCosts]: (state, { payload }) =>
    state.map((item) => (item.id === payload.id ? payload : item)),
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
  [editIncomes]: (state, { payload }) =>
    state.map((item) => (item.id === payload.id ? payload : item)),
});

const transactionsReducer = combineReducers({
  costs: costsReducer,
  incomes: incomesReducer,
});

export { transactionsReducer };

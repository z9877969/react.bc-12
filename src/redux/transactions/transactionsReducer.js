// import { combineReducers } from "redux";
import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  // addIncomes,
  removeCosts,
  editCosts,
  editIncomes,
  getCostsSuccess,
  getCostsError,
  getCostsRequest,
  getIncomesRequest,
  getIncomesSuccess,
  getIncomesError,
  addCostsSuccess,
} from "./transactionsActions";

import { addIncomes } from "./transactionOperations";

const costsReducer = createReducer([], {
  [getCostsSuccess]: (_, { payload }) => payload,
  [addCostsSuccess]: (state, { payload }) => [...state, payload],
  [removeCosts]: (state, { payload }) =>
    state.filter((item) => item.id !== payload),
  [editCosts]: (state, { payload }) =>
    state.map((item) => (item.id === payload.id ? payload : item)),
});

const incomesReducer = createReducer([], {
  [getIncomesSuccess]: (_, { payload }) => payload,
  [addIncomes.fulfilled]: (state, { payload }) => [...state, payload],
  [editIncomes]: (state, { payload }) =>
    state.map((item) => (item.id === payload.id ? payload : item)),
});

const setError = (_, { payload }) => payload;
const resetError = () => null;

const errorReducer = createReducer(null, {
  [getCostsError]: setError,
  [getCostsRequest]: resetError,
  [getIncomesError]: setError,
  [getIncomesRequest]: resetError,
  [addIncomes.rejected]: setError,
  [addIncomes.pending]: resetError,
});

const transactionsReducer = combineReducers({
  costs: costsReducer,
  incomes: incomesReducer,
  error: errorReducer,
});

export { transactionsReducer };

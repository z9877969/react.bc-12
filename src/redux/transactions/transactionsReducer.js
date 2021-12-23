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
  getCostsSuccess,
  getCostsError,
  getCostsRequest,
  getIncomesRequest,
  getIncomesSuccess,
  getIncomesError,
} from "./transactionsActions";

const costsReducer = createReducer([], {
  [getCostsSuccess]: (_, { payload }) => payload,
  [addCosts]: (state, { payload }) => [...state, payload],
  [removeCosts]: (state, { payload }) =>
    state.filter((item) => item.id !== payload),
  [editCosts]: (state, { payload }) =>
    state.map((item) => (item.id === payload.id ? payload : item)),
});

const incomesReducer = createReducer([], {
  [getIncomesSuccess]: (_, { payload }) => payload,
  [addIncomes]: (state, { payload }) => [...state, payload],
  [editIncomes]: (state, { payload }) =>
    state.map((item) => (item.id === payload.id ? payload : item)),
});

const transactionsReducer = combineReducers({
  costs: costsReducer,
  incomes: incomesReducer,
});

export { transactionsReducer };

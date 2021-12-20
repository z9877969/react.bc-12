import { combineReducers } from "redux";

const costsReducer = (state = [], action) => {
  switch (action.type) {
    case "transactions/addCosts":
      return [...state, action.payload];
    default:
      return state;
  }
};

const incomesReducer = (state = [], action) => {
  switch (action.type) {
    case "transactions/addIncomes":
      return [...state, action.payload];
    default:
      return state;
  }
};

const transactionsReducer = combineReducers({
  costs: costsReducer,
  incomes: incomesReducer,
});

export { transactionsReducer };

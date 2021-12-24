import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  getCostsRequest,
  getCostsSuccess,
  getCostsError,
  getIncomesRequest,
  getIncomesError,
  getIncomesSuccess,
  addCostsRequest,
  addCostsSuccess,
  addCostsError,
} from "./transactionsActions";

import { getTransactions, postTransaction } from "../../utils/api";

const getCosts = () => (dispatch) => {
  dispatch(getCostsRequest());
  getTransactions("costs")
    .then((costs) => dispatch(getCostsSuccess(costs)))
    .catch((err) => dispatch(getCostsError(err.message)));
};

const getIncomes = () => (dispatch) => {
  dispatch(getIncomesRequest());
  getTransactions("incomes")
    .then((incomes) => dispatch(getIncomesSuccess(incomes)))
    .catch((err) => dispatch(getIncomesError(err.message)));
};

const addCosts = (transaction) => (dispatch) => {
  dispatch(addCostsRequest());
  postTransaction("costs", transaction)
    .then((costs) => {
      dispatch(addCostsSuccess(costs));
    })
    .catch((err) => dispatch(addCostsError(err.message)));
};

const addIncomes = createAsyncThunk(
  "transactions/addIncomes",
  async (transaction, thunkAPI) => {
    try {
      const response = await postTransaction("incomes", {
        ...transaction,
        id: 10,
      });
      // console.log(response);
      return response;
    } catch (error) {
      // console.log(error.request);
      return thunkAPI.rejectWithValue({
        message: error.message,
        status: error.request.status,
      });
    }
  }
);

export { getCosts, getIncomes, addCosts, addIncomes };

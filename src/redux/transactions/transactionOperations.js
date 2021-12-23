// const requestOperation = () => {
//   const callback = (dispatch) => {
//     dispatch({ type: "getCostsRequest" });

//     fetch("http://localhost:3004/costs")
//       .then((res) => res.json())
//       .then((costs) => dispatch({ type: "getCostsSuccess", payload: costs }))
//       .catch((err) =>
//         dispatch({ type: "getCostsError", payload: err.message })
//       );
//   };

//   return callback;
// };

import {
  getCostsRequest,
  getCostsSuccess,
  getCostsError,
  getIncomesRequest,
  getIncomesError,
  getIncomesSuccess,
} from "./transactionsActions";

import { getTransactions } from "../../utils/api";

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

export { getCosts, getIncomes };

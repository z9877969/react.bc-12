import { createAction } from "@reduxjs/toolkit";

// const addCosts = (transaction) => {
//   return {
//     type: "transactions/addCosts",
//     payload: transaction,
//   };
// }

const addCosts = createAction("transactions/addCosts");

// const addIncomes = (transaction) => {
//   return {
//     type: "transactions/addIncomes",
//     payload: transaction,
//   };
// };
const addIncomes = createAction("transactions/addIncomes");

const getCosts = createAction("transactions/getCosts");
const getIncomes = createAction("transactions/getIncomes");
const removeCosts = createAction("transactions/removeCosts");
const editCosts = createAction("transactions/editCosts");
const editIncomes = createAction("transactions/editIncomes");

export const getCostsRequest = createAction("transactions/getCostsRequest");
export const getCostsSuccess = createAction("transactions/getCostsSuccess");
export const getCostsError = createAction("transactions/getCostsError");

export const getIncomesRequest = createAction("transactions/getIncomesRequest");
export const getIncomesSuccess = createAction("transactions/getIncomesSuccess");
export const getIncomesError = createAction("transactions/getIncomesError");

export const addCostsRequest = createAction("transactions/addCostsRequest");
export const addCostsSuccess = createAction("transactions/addCostsSuccess");
export const addCostsError = createAction("transactions/addCostsError");

export {
  addCosts,
  addIncomes,
  getCosts,
  getIncomes,
  removeCosts,
  editCosts,
  editIncomes,
};

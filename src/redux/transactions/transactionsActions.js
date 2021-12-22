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

export {
  addCosts,
  addIncomes,
  getCosts,
  getIncomes,
  removeCosts,
  editCosts,
  editIncomes,
};

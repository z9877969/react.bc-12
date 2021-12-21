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

export { addCosts, addIncomes };

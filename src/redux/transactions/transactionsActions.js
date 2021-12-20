const addCosts = (transaction) => {
  return {
    type: "transactions/addCosts",
    payload: transaction,
  };
};

const addIncomes = (transaction) => {
  return {
    type: "transactions/addIncomes",
    payload: transaction,
  };
};

export { addCosts, addIncomes };

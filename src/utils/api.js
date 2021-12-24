import axios from "axios";

axios.defaults.baseURL = "http://localhost:3004/";

const postTransaction = async (endPoint, transaction) => {
  try {
    const { data } = await axios.post(endPoint, transaction);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const getTransactions = async (endPoint) => {
  try {
    const { data } = await axios.get(endPoint);
    return data;
  } catch (error) {
    throw error;
  }
};

const removeTransaction = async (endPoint, id) => {
  try {
    const { data } = await axios.delete(endPoint + "/" + id);
    console.log(data);
    return id;
  } catch (error) {
    throw error;
  }
};
const updateTransaction = async (endPoint, id, updatingData) => {
  try {
    const { data } = await axios.put(endPoint + "/" + id, updatingData);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};

export {
  postTransaction,
  getTransactions,
  removeTransaction,
  updateTransaction,
};

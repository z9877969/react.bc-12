import axios from "axios";

axios.defaults.baseURL = "http://localhost:3004/";

const postTransaction = async (endPoint, transaction) => {
  try {
    const { data } = await axios.post(endPoint, transaction);
    return data;
  } catch (error) {
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

export { postTransaction, getTransactions };

import { createContext, useContext, useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { getTransactions } from "../utils/api";

const MainContext = createContext();

export const useMainContext = () => useContext(MainContext);

const MainProvider = ({ children }) => {
  // const [activePage, setActivePage] = useState("main");
  const [costs, setCosts] = useState([]);
  const [incomes, setIncomes] = useState([]);
  //   const [categories, setCategories] = useState([
  //     { id: "diff", title: "Разное" },
  //   ]);
  const [categories, setCategories] = useLocalStorage(
    [{ id: "diff", title: "Разное" }],
    "categories"
  );

  const [error, setError] = useState(null);

  // const toggleActivePage = (activePage = "main") => {
  //   setActivePage(activePage);
  // };

  // const addTransaction = ({ dataForm, transType }) => {
  //   transType === "costs" && setCosts((prevCosts) => [...prevCosts, dataForm]);
  //   transType === "incomes" &&
  //     setIncomes((prevIncomes) => [...prevIncomes, dataForm]);
  // };

  const addCategory = (category) => {
    setCategories((prevCategories) => [...prevCategories, category]);
  };

  return (
    <MainContext.Provider
      value={{
        // activePage,
        costs,
        incomes,
        categories,
        error,
        // toggleActivePage,
        // addTransaction,
        addCategory,
        setError,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;

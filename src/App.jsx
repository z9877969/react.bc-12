import { useEffect } from "react";
import MainPage from "./components/_pages/MainPage/MainPage";
import TransactionPage from "./components/_pages/TransactionPage/TransactionPage";
import { useMainContext } from "./context/MainProvider";

const App = () => {
  // const value = useContext(MainContext);
  const { activePage, error, setError } = useMainContext();

  useEffect(() => {
    if (error) {
      alert(error);
      setError(null);
    }
  }, [error]);

  return (
    <>
      {activePage === "main" && <MainPage />}
      {activePage === "costs" && <TransactionPage transType={"costs"} />}
      {activePage === "incomes" && <TransactionPage transType={"incomes"} />}
      {activePage === "balance" && <h1>Balance</h1>}
    </>
  );
};

export default App;

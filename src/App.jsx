import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import MainPage from "./components/_pages/MainPage/MainPage";
import TransactionPage from "./components/_pages/TransactionPage/TransactionPage";
import BalancePage from "./components/_pages/BalancePage/BalancePage";
import { useMainContext } from "./context/MainProvider";
import { getTransactions } from "./utils/api";
// import { getCosts, getIncomes } from "./redux/transactions/transactionsActions";
import {
  getCosts,
  getIncomes,
} from "./redux/transactions/transactionOperations";

const App = () => {
  const dispatch = useDispatch();
  // const value = useContext(MainContext);
  const { activePage, error, setError } = useMainContext();

  useEffect(() => {
    if (error) {
      alert(error);
      setError(null);
    }
  }, [error]);

  useEffect(() => {
    dispatch(getCosts());
    dispatch(getIncomes());
  }, [dispatch]);

  return (
    <Switch>
      <Route exact path={"/"}>
        <MainPage />
      </Route>

      <Route path={"/transaction/:transType/:transId"}>
        <TransactionPage />
      </Route>

      <Route path={"/transaction/:transType"}>
        <TransactionPage />
      </Route>

      <Route path={"/balance"}>
        <BalancePage />
      </Route>
    </Switch>
  );
};

export default App;

{
  /* <>
  {activePage === "main" && <MainPage />}
  {activePage === "costs" && <TransactionPage transType={"costs"} />}
  {activePage === "incomes" && <TransactionPage transType={"incomes"} />}
  {activePage === "balance" && <h1>Balance</h1>}
</>; */
}

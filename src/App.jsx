import { useMainContext } from "./context/MainProvider";

const App = () => {
  // const value = useContext(MainContext);
  const { activePage, error, setError } = useMainContext();

  return (
    <>
      <h1>App</h1>
    </>
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

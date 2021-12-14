import { useState, useEffect } from "react";
import MainPage from "./components/_pages/MainPage/MainPage";
import TransactionPage from "./components/_pages/TransactionPage/TransactionPage";
import { getTransactions } from "./utils/api";

const App = () => {
  // state = {
  //   activePage: "main", // costs || incomes
  //   costs: [],
  //   incomes: [],
  //   categories: [{ id: "diff", title: "Разное" }],
  //   error: null,
  // };
  const [activePage, setActivePage] = useState("main");
  const [costs, setCosts] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [categories, setCategories] = useState([
    { id: "diff", title: "Разное" },
  ]);
  const [error, setError] = useState(null);

  // setError = (error = null) => {
  //   this.setState({ error });
  // };

  const openActivePage = (activePage = "main") => {
    // costs || incomes || main
    setActivePage(activePage);
  };

  const addCategory = (category) => {
    // this.setState((prevState) => {
    //   return {
    //     categories: [...prevState.categories, category],
    //   };
    // });
    setCategories((prevCategories) => [...prevCategories, category]);
  };

  const addTransaction = ({ dataForm, transType }) => {
    // this.setState((prevState) => {
    //   return { [transType]: [...prevState[transType], dataForm] };
    // });
    transType === "costs" &&
      setCosts((prevCosts) => [...prevCosts, dataForm])(
        transType === "incomes"
      ) &&
      setIncomes((prevIncomes) => [...prevIncomes, dataForm]);
  };

  // async componentDidMount() {
  //   // const costs = JSON.parse(localStorage.getItem("costs"));
  //   // const incomes = JSON.parse(localStorage.getItem("incomes"));
  //   try {
  //     const costs = await getTransactions("costs");
  //     const incomes = await getTransactions("incomes");
  //     setState({ costs, incomes });
  //   } catch (error) {
  //     setError(error);
  //   }
  // }

  useEffect(() => {
    console.log("useEffect");
    const getTransactions = async () => {
      try {
        const costs = await getTransactions("costs");
        const incomes = await getTransactions("incomes");
        setCosts(costs);
        setIncomes(incomes);
      } catch (error) {
        setError(error.message);
      }
    };
    getTransactions();
  }, []);

  // componentDidUpdate(prevProps, prevState) {
  //   const { state, setError } = this;
  //   if (state.error && prevState.error !== state.error) {
  //     alert(state.error.message);
  //     setError(null);
  //   }
  // }
  // useEffect(() => {
  //   if (error) {
  //     alert(error);
  //     setError(null);
  //   }
  // }, [error]);

  return (
    <>
      {activePage === "main" && <MainPage openActivePage={openActivePage} />}
      {activePage === "costs" && (
        <TransactionPage
          addData={addTransaction}
          closeTransactionPage={openActivePage}
          transType={"costs"}
          categories={categories}
          addCategory={addCategory}
          setError={setError}
        />
      )}
      {activePage === "incomes" && (
        <TransactionPage
          addData={addTransaction}
          closeTransactionPage={openActivePage}
          transType={"incomes"}
          categories={categories}
          addCategory={addCategory}
          setError={setError}
        />
      )}
      {activePage === "balance" && <h1>Balance</h1>}
    </>
  );
};

export default App;

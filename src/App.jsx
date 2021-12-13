import { Component } from "react";
import MainPage from "./components/_pages/MainPage/MainPage";
import TransactionPage from "./components/_pages/TransactionPage/TransactionPage";
import { getTransactions } from "./utils/api";

class App extends Component {
  state = {
    activePage: "main", // costs || incomes
    costs: [],
    incomes: [],
    categories: [{ id: "diff", title: "Разное" }],
    error: null,
  };

  async componentDidMount() {
    // const costs = JSON.parse(localStorage.getItem("costs"));
    // const incomes = JSON.parse(localStorage.getItem("incomes"));
    try {
      const costs = await getTransactions("costs");
      const incomes = await getTransactions("incomes");
      this.setState({ costs, incomes });
    } catch (error) {
      this.setError(error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { state, setError } = this;
    if (state.error && prevState.error !== state.error) {
      alert(state.error.message);
      setError();
    }
  }

  setError = (error = null) => {
    this.setState({ error });
  };

  openActivePage = (activePage = "main") => {
    // costs || incomes || main
    this.setState({ activePage });
  };

  addCategory = (category) => {
    this.setState((prevState) => {
      return {
        categories: [...prevState.categories, category],
      };
    });
  };

  addTransaction = ({ dataForm, transType }) => {
    this.setState((prevState) => {
      return { [transType]: [...prevState[transType], dataForm] };
    });
  };

  render() {
    const { activePage, categories } = this.state;
    return (
      <>
        {activePage === "main" && (
          <MainPage openActivePage={this.openActivePage} />
        )}
        {activePage === "costs" && (
          <TransactionPage
            addData={this.addTransaction}
            closeTransactionPage={this.openActivePage}
            transType={"costs"}
            categories={categories}
            addCategory={this.addCategory}
            setError={this.setError}
          />
        )}
        {activePage === "incomes" && (
          <TransactionPage
            addData={this.addTransaction}
            closeTransactionPage={this.openActivePage}
            transType={"incomes"}
            categories={categories}
            addCategory={this.addCategory}
            setError={this.setError}
          />
        )}
        {activePage === "balance" && <h1>Balance</h1>}
      </>
    );
  }
}

export default App;

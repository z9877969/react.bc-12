import { Component } from "react";
import MainPage from "./components/_pages/MainPage/MainPage";
import TransactionPage from "./components/_pages/TransactionPage/TransactionPage";

class App extends Component {
  state = {
    activePage: "main", // costs || incomes
    costs: [],
    incomes: [],
    categories: [{ id: "diff", title: "Разное" }],
  };

  componentDidMount() {
    const costs = JSON.parse(localStorage.getItem("costs"));
    const incomes = JSON.parse(localStorage.getItem("incomes"));
    costs && this.setState({ costs });
    incomes && this.setState({ incomes });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.costs !== this.state.costs) {
      localStorage.setItem("costs", JSON.stringify(this.state.costs));
    }
    if (prevState.incomes !== this.state.incomes) {
      localStorage.setItem("incomes", JSON.stringify(this.state.incomes));
    }
  }

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
          />
        )}
        {activePage === "incomes" && (
          <TransactionPage
            addData={this.addTransaction}
            closeTransactionPage={this.openActivePage}
            transType={"incomes"}
            categories={categories}
            addCategory={this.addCategory}
          />
        )}
        {activePage === "balance" && <h1>Balance</h1>}
      </>
    );
  }
}

export default App;

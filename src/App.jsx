import { Component } from "react";
import MainPage from "./components/_pages/MainPage/MainPage";
import TransactionPage from "./components/_pages/TransactionPage/TransactionPage";

class App extends Component {
  state = {
    activePage: "main", // costs || incomes
    data: [],
    categories: [],
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

  addData = (dataForm) => {
    this.setState((prevState) => {
      return { data: [...prevState.data, dataForm] };
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
            addData={this.addData}
            closeTransactionPage={this.openActivePage}
            transType={"costs"}
            categories={categories}
            addCategory={this.addCategory}
          />
        )}
        {activePage === "incomes" && (
          <TransactionPage
            addData={this.addData}
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

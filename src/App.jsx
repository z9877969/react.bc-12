import { Component } from "react";
import MainPage from "./components/_pages/MainPage/MainPage";
import TransactionPage from "./components/_pages/TransactionPage/TransactionPage";

class App extends Component {
  state = {
    activePage: "main", // costs || incomes
    data: [],
  };

  openActivePage = (activePage = "main") => {
    // costs || incomes || main
    this.setState({ activePage });
  };

  addData = (dataForm) => {
    this.setState((prevState) => {
      return { data: [...prevState.data, dataForm] };
    });
  };

  render() {
    const { activePage } = this.state;
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
          />
        )}
        {activePage === "incomes" && (
          <TransactionPage
            addData={this.addData}
            closeTransactionPage={this.openActivePage}
            transType={"incomes"}
          />
        )}
        {activePage === "balance" && <h1>Balance</h1>}
      </>
    );
  }
}

export default App;

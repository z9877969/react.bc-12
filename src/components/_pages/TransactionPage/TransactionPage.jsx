import { Component } from "react";
import GoBackHeader from "../../_shared/goBackHeader/goBackHeader";
import TransactionForm from "../../TransactionForm/TransactionForm";
import CategoriesList from "../../CategoriesList/CategoriesList";

class TransactionPage extends Component {
  state = {
    isOpenCategories: false,
    date: "2021-12-10",
    time: "14:53",
    category: this.props.categories[0],
    sum: "",
    currency: "EUR",
    comment: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  closeCategoriesList = () => {
    this.setState({ isOpenCategories: false });
  };

  openCategoriesList = () => {
    this.setState({ isOpenCategories: true });
  };

  render() {
    const {
      addCategory,
      closeTransactionPage,
      addData,
      transType,
      categories,
    } = this.props;
    const { isOpenCategories, ...dataForm } = this.state;
    const formTitle =
      !isOpenCategories && (transType === "costs" ? "Расходы" : "Доходы");
    return (
      <section style={{ width: "400px", margin: "0 auto" }}>
        <GoBackHeader
          title={isOpenCategories ? "Категории" : formTitle}
          handleGoBack={
            isOpenCategories ? this.closeCategoriesList : closeTransactionPage
          }
        />

        {!isOpenCategories ? (
          <TransactionForm
            handleChange={this.handleChange}
            addData={addData}
            openCategoriesList={this.openCategoriesList}
            dataForm={dataForm}
            transType={transType}
          />
        ) : (
          <CategoriesList categories={categories} addCategory={addCategory} />
        )}
      </section>
    );
  }
}

export default TransactionPage;

// export default function TransactionPage({ closeTransactionPage, addData }) {
//   const isOpenCategories = false;
//   return (
//     <section style={{ width: "400px", margin: "0 auto" }}>
//       <GoBackHeader handleGoBack={closeTransactionPage} />

//       {!isOpenCategories ? (
//         <TransactionForm addData={addData} />
//       ) : (
//         <CategoriesList />
//       )}
//     </section>
//   );
// }

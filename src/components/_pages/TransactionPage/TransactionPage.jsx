import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import GoBackHeader from "../../_shared/goBackHeader/goBackHeader";
import TransactionForm from "../../TransactionForm/TransactionForm";
import CategoriesList from "../../CategoriesList/CategoriesList";
import { useMainContext } from "../../../context/MainProvider";
import LanguageProvider from "../../../context/LanguageProvider";

const TransactionPage = () => {
  const history = useHistory();
  const { transType } = useParams();
  const { toggleActivePage, addCategory, categories } = useMainContext();

  const [isOpenCategories, setIsOpenCategories] = useState(false);
  const [dataForm, setDataForm] = useState({
    date: "2021-12-10",
    time: "14:53",
    category: categories[0],
    sum: "",
    currency: "EUR",
    comment: "",
  });

  const handleGoBack = () => history.push("/");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm((prev) => ({ ...prev, [name]: value }));
  };

  const closeCategoriesList = () => setIsOpenCategories(false);

  const openCategoriesList = () => setIsOpenCategories(true);

  const formTitle =
    !isOpenCategories && (transType === "costs" ? "Расходы" : "Доходы");

  console.log("transactionPage");

  return (
    <section style={{ width: "400px", margin: "0 auto" }}>
      <GoBackHeader
        title={isOpenCategories ? "Категории" : formTitle}
        handleGoBack={isOpenCategories ? closeCategoriesList : handleGoBack}
      />

      {!isOpenCategories ? (
        <LanguageProvider>
          <TransactionForm
            handleChange={handleChange}
            openCategoriesList={openCategoriesList}
            dataForm={dataForm}
            transType={transType}
          />
        </LanguageProvider>
      ) : (
        <CategoriesList categories={categories} addCategory={addCategory} />
      )}
    </section>
  );
};

export default TransactionPage;

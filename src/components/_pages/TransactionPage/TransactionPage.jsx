import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import GoBackHeader from "../../_shared/goBackHeader/goBackHeader";
import TransactionForm from "../../TransactionForm/TransactionForm";
import CategoriesList from "../../CategoriesList/CategoriesList";
import { useMainContext } from "../../../context/MainProvider";
import LanguageProvider from "../../../context/LanguageProvider";
import { useSelector } from "react-redux";

const TransactionPage = () => {
  const history = useHistory();
  const { transType, transId } = useParams();
  const { toggleActivePage, addCategory, categories } = useMainContext();

  const transactions = useSelector((state) => state.transactions);
  const curTransaction = transactions[transType].find(
    (data) => data.id === Number(transId)
  );

  const [isOpenCategories, setIsOpenCategories] = useState(false);
  const [dataForm, setDataForm] = useState(() => {
    if (!transId) {
      return {
        date: "2021-12-10",
        time: "14:53",
        category: categories[0],
        sum: "",
        currency: "EUR",
        comment: "",
      };
    }
    return curTransaction;
  });

  const handleGoBack = () => history.push(history.location.state || "/");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm((prev) => ({ ...prev, [name]: value }));
  };

  const closeCategoriesList = () => setIsOpenCategories(false);

  const openCategoriesList = () => setIsOpenCategories(true);

  const formTitle =
    !isOpenCategories && (transType === "costs" ? "Расходы" : "Доходы");

  console.log("transactionPage");

  useEffect(() => {
    curTransaction && setDataForm(curTransaction);
  }, [curTransaction]);

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
            transId={transId}
            handleGoBack={handleGoBack}
          />
        </LanguageProvider>
      ) : (
        <CategoriesList categories={categories} addCategory={addCategory} />
      )}
    </section>
  );
};

export default TransactionPage;

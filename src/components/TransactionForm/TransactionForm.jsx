import { Component, useState } from "react";
import LabelInput from "../_shared/labelInput/labelInput";
import { Form } from "./TransactionForm.style.js";
import { postTransaction, updateTransaction } from "../../utils/api";
import { useMainContext } from "../../context/MainProvider";
import { useLanguageContext } from "../../context/LanguageProvider";
import { connect, useDispatch } from "react-redux";
import {
  addCosts,
  addIncomes,
  editCosts,
  editIncomes,
} from "../../redux/transactions/transactionsActions";

const TransactionForm = ({
  openCategoriesList,
  handleChange,
  dataForm = {},
  transType,
  addCosts,
  addIncomes,
  handleGoBack,
  transId,
}) => {
  const { addTransaction, setError } = useMainContext();
  const { dataFormOptions } = useLanguageContext();
  const dispatch = useDispatch();

  const [lang, useLang] = useState("en");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!transId) {
      postTransaction(transType, dataForm)
        .then((transaction) => {
          // addTransaction({ dataForm: transaction, transType })
          transType === "costs" && addCosts(transaction);
          transType === "incomes" && addIncomes(transaction);
        })
        .catch((error) => setError(error));
    } else {
      updateTransaction(transType, transId, dataForm)
        .then((updatedTransaction) => {
          transType === "costs" && dispatch(editCosts(updatedTransaction));
          transType === "incomes" && dispatch(editIncomes(updatedTransaction));
          handleGoBack();
        })
        .catch((error) => setError(error));
    }
  };

  const { date, time, category, sum, currency, comment } = dataForm;

  return (
    <Form onSubmit={handleSubmit}>
      <button type="submit">OK</button>
      <LabelInput
        name="date"
        handleChange={handleChange}
        title={dataFormOptions.date[lang]}
        type="date"
        value={date}
      />
      <LabelInput
        name="time"
        handleChange={handleChange}
        title={dataFormOptions.time[lang]}
        type="time"
        value={time}
      />
      <LabelInput
        name="category"
        handleChange={handleChange}
        title={dataFormOptions.category[lang]}
        type="button"
        handleClick={openCategoriesList}
        value={category?.title}
      />
      <LabelInput
        name="sum"
        handleChange={handleChange}
        title={dataFormOptions.sum[lang]}
        type="text"
        placeholder="Введите сумму"
        value={sum}
      />
      <LabelInput
        name="currency"
        handleChange={handleChange}
        title={dataFormOptions.currency[lang]}
        type="button"
        value={currency}
      />
      <LabelInput
        name="comment"
        handleChange={handleChange}
        type="text"
        placeholder="Коментарий"
        value={comment}
      />
    </Form>
  );
};

const mapStateToProps = (state) => {
  return { aProp: state.a, bProp: state.b, costs: state.transactions.costs };
};

const mapDispatchToProps = {
  addCosts,
  addIncomes,
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);

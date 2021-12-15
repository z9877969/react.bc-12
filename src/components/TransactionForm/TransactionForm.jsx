import { Component, useState } from "react";
import LabelInput from "../_shared/labelInput/labelInput";
import { Form } from "./TransactionForm.style.js";
import { postTransaction } from "../../utils/api";
import { useMainContext } from "../../context/MainProvider";
import { useLanguageContext } from "../../context/LanguageProvider";

const TransactionForm = ({
  openCategoriesList,
  handleChange,
  dataForm,
  transType,
}) => {
  const { addTransaction, setError } = useMainContext();
  const { dataFormOptions } = useLanguageContext();

  const [lang, useLang] = useState("en");

  const handleSubmit = (e) => {
    e.preventDefault();
    postTransaction(transType, dataForm)
      .then((transaction) =>
        addTransaction({ dataForm: transaction, transType })
      )
      .catch((error) => setError(error));
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
        value={category.title}
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

export default TransactionForm;

import { Component } from "react";
import LabelInput from "../_shared/labelInput/labelInput";
import { Form } from "./TransactionForm.style.js";

export default class TransactionForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const { dataForm, addData, transType } = this.props;
    addData({ dataForm, transType });
  };

  render() {
    const { openCategoriesList, handleChange, dataForm } = this.props;
    const { date, time, category, sum, currency, comment } = dataForm;

    return (
      <Form onSubmit={this.handleSubmit}>
        <button type="submit">OK</button>
        <LabelInput
          name="date"
          handleChange={handleChange}
          title="День"
          type="date"
          value={date}
        />
        <LabelInput
          name="time"
          handleChange={handleChange}
          title="Время"
          type="time"
          value={time}
        />
        <LabelInput
          name="category"
          handleChange={handleChange}
          title="Категория"
          type="button"
          handleClick={openCategoriesList}
          value={category.title}
        />
        <LabelInput
          name="sum"
          handleChange={handleChange}
          title="Сумма"
          type="text"
          placeholder="Введите сумму"
          value={sum}
        />
        <LabelInput
          name="currency"
          handleChange={handleChange}
          title="Валюта"
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
  }
}

// const obj = {
//   a: "654",
// };

// obj.a; // "654"
// obj["a"]; // "654"

// const key = "a";
// obj[key]; // "654"

import LabelInput from "../_shared/labelInput/labelInput";
import { Form } from "./TransactionForm.style.js";

export default function TransactionForm() {
  return (
    <Form>
      <button type="submit">OK</button>
      <LabelInput title="День" type="date" />
      <LabelInput title="Время" type="time" />
      <LabelInput title="Категория" type="button" />
      <LabelInput title="Сумма" type="text" placeholder="Введите сумму" />
      <LabelInput title="Валюта" type="button" />
      <LabelInput type="text" placeholder="Коментарий" />
    </Form>
  );
}

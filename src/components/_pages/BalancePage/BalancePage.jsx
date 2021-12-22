import { useSelector } from "react-redux";
import TransactionsList from "../../TransactionsList/TransactionsList";

const BalancePage = () => {
  const costs = useSelector((state) => state.transactions.costs);
  const incomes = useSelector((state) => state.transactions.incomes);

  return (
    <>
      <TransactionsList
        transactions={costs}
        title={"Расходы"}
        transType={"costs"}
      />
      <TransactionsList
        transactions={incomes}
        title={"Доходы"}
        transType={"incomes"}
      />
    </>
  );
};

export default BalancePage;

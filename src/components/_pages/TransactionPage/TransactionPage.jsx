import GoBackHeader from "../../_shared/goBackHeader/goBackHeader";
import TransactionForm from "../../TransactionForm/TransactionForm";

export default function TransactionPage({ closeTransactionPage, addData }) {
  return (
    <section style={{ width: "400px", margin: "0 auto" }}>
      <GoBackHeader handleGoBack={closeTransactionPage} />
      <TransactionForm addData={addData} />
    </section>
  );
}

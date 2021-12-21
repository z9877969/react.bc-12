import { useSelector, useDispatch } from "react-redux";
import { removeCosts } from "../../../redux/transactions/transactionsActions";
import { removeTransaction } from "../../../utils/api";

const BalancePage = () => {
  const costs = useSelector((state) => state.transactions.costs);
  const dispatch = useDispatch();

  return (
    <ul>
      {costs.map(({ date, sum, id }) => (
        <li key={id}>
          <span>Date:{date}</span>
          <span>Sum:{sum}</span>
          <button
            type="button"
            onClick={() => {
              removeTransaction("costs", id).then((id) =>
                dispatch(removeCosts(id))
              );
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default BalancePage;

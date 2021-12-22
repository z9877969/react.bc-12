import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeCosts } from "../../redux/transactions/transactionsActions";
import { removeTransaction } from "../../utils/api";

const TransactionsList = ({ transactions, title, transType }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const goToEditPage = (id) => {
    const newLocation = {
      pathname: `/transaction/${transType}/${id}`,
      state: history.location,
    };
    history.push(newLocation);
  };

  return (
    <>
      <h3>{title}</h3>
      <ul>
        {transactions.map(({ date, sum, id }) => (
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
            <button onClick={() => goToEditPage(id)} type="button">
              Edit
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TransactionsList;

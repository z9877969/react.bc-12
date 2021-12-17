import { useHistory } from "react-router-dom";
import MainInfo from "../../MainInfo/MainInfo";
import OpenHistoryBtns from "../../OpenHistoryBtns/OpenHistoryBtns";
import {
  costsInfoOptions,
  incomesInfoOptions,
  balanceInfoOptions,
} from "../../../assets/options/mainInfoOptions.json";
import { useMainContext } from "../../../context/MainProvider";

const MainPage = () => {
  const { toggleActivePage } = useMainContext();
  const history = useHistory();
  const openActivePage = (transType) => {
    history.push(
      transType === "balance" ? `/${transType}` : `/transaction/${transType}`
    );
  };

  return (
    <section style={{ width: "400px", margin: "0 auto" }}>
      <h1>Журнал расходов</h1>
      <MainInfo
        openActivePage={openActivePage}
        btnTitle="Add"
        options={costsInfoOptions}
        title="Расходы"
        activePage="costs"
      />
      <MainInfo
        openActivePage={openActivePage}
        btnTitle="Add"
        options={incomesInfoOptions}
        title="Доходы"
        activePage="incomes"
      />
      <MainInfo
        btnTitle="Show"
        options={balanceInfoOptions}
        title="Баланс"
        openActivePage={openActivePage}
        activePage="balance"
      />
      <OpenHistoryBtns />
    </section>
  );
};

export default MainPage;

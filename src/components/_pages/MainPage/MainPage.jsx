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

  return (
    <section style={{ width: "400px", margin: "0 auto" }}>
      <h1>Журнал расходов</h1>
      <MainInfo
        openActivePage={toggleActivePage}
        btnTitle="Add"
        options={costsInfoOptions}
        title="Расходы"
        activePage="costs"
      />
      <MainInfo
        openActivePage={toggleActivePage}
        btnTitle="Add"
        options={incomesInfoOptions}
        title="Доходы"
        activePage="incomes"
      />
      <MainInfo
        btnTitle="Show"
        options={balanceInfoOptions}
        title="Баланс"
        openActivePage={toggleActivePage}
        activePage="balance"
      />
      <OpenHistoryBtns />
    </section>
  );
};

export default MainPage;

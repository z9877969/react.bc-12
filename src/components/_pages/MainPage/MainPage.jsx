import MainInfo from "../../MainInfo/MainInfo";
import OpenHistoryBtns from "../../OpenHistoryBtns/OpenHistoryBtns";
import {
  costsInfoOptions,
  incomesInfoOptions,
  balanceInfoOptions,
} from "../../../assets/options/mainInfoOptions.json";

const MainPage = ({ openActivePage }) => {
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

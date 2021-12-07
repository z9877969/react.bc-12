import MainInfo from "../../MainInfo/MainInfo";
import OpenHistoryBtns from "../../OpenHistoryBtns/OpenHistoryBtns";
import {
  costsInfoOptions,
  incomesInfoOptions,
  balanceInfoOptions,
} from "../../../assets/options/mainInfoOptions.json";

const MainPage = () => {
  return (
    <>
      <h1>Журнал расходов</h1>
      {/* {MainInfo({ title: "JS", a: [], b: {}, c: true })} */}
      {/* <MainInfo title="Расходы" aJ={[]} bJ={{}} cJ={true} /> */}
      <MainInfo btnTitle="Add" options={costsInfoOptions} title="Расходы" />
      <MainInfo options={incomesInfoOptions} title="Доходы" />
      <MainInfo btnTitle="Show" options={balanceInfoOptions} title="Баланс" />
      <OpenHistoryBtns />
    </>
  );
};

export default MainPage;

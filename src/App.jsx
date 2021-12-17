import { useMainContext } from "./context/MainProvider";

const App = () => {
  // const value = useContext(MainContext);
  const { activePage, error, setError } = useMainContext();

  return (
    <>
      <h1>App</h1>
    </>
  );
};

export default App;

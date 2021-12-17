import { Route, Link, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DeliveryPage from "./pages/DeliveryPage";
import BrandPage from "./pages/BrandPage";
import CategoryPage from "./pages/CategoryPage";
import { useMainContext } from "./context/MainProvider";

// const CategoryPage = ({ categoryName }) => <h1>Category {categoryName}</h1>;
// const BrandPage = () => <h1>BrandPage</h1>;

const App = () => {
  // const value = useContext(MainContext);
  const { activePage, error, setError } = useMainContext();

  return (
    <>
      <nav>
        <Link to={"/"}>Товары</Link>
        <Link to={"/contacts"}>Контакты</Link>
        <Link to={"/delivery"}>Доставка</Link>
      </nav>
      <Switch>
        <Route path={"/"} exact component={HomePage} />

        <Route path="/brand">
          <BrandPage />
        </Route>
        <Route path="/delivery">
          <DeliveryPage />
        </Route>
        <Route path="/contacts">
          <h1>Contacts</h1>
        </Route>
        <Route path={"/:categoryId/:brandName"}>
          <BrandPage />
        </Route>
        <Route
          path={"/:categoryId"}
          render={(routerProps) => (
            <CategoryPage {...routerProps} categoryName="tShorts" />
          )}
        />
      </Switch>
    </>
  );
};

export default App;

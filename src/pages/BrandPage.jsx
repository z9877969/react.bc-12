import { Link, Route, useRouteMatch } from "react-router-dom";

const BrandPage = () => {
  const match = useRouteMatch();

  return (
    <div>
      <h1>BrandPage</h1>
      <Link to={match.url + "/descr"}>Description</Link>
      <Link to={match.url + "/sets"}>Sets</Link>
      <Link to={match.url + "/comments"}>Comments</Link>
      <Route path={match.path + "/descr"}>
        <h2>Description</h2>
      </Route>
      <Route path={match.path + "/sets"}>
        <h2>Sets</h2>
      </Route>
      <Route path={match.path + "/comments"}>
        <h2>Comments</h2>
      </Route>
    </div>
  );
};

export default BrandPage;

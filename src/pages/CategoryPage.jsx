import { Link, useRouteMatch } from "react-router-dom";

const CategoryPage = () => {
  const match = useRouteMatch();
  console.log("CategoryPage");
  return (
    <>
      <h1>{match.params.categoryId}</h1>
      <ul>
        <li>
          <Link to={match.url + "/brand-1"}>Brand-1</Link>
        </li>
        <li>
          <Link to={match.url + "/brand-2"}>Brand-2</Link>
        </li>
        <li>
          <Link to={match.url + "/brand-3"}>Brand-3</Link>
        </li>
        <li>
          <Link to={match.url + "/brand-4"}>Brand-4</Link>
        </li>
        <li>
          <Link to={match.url + "/brand-5"}>Brand-5</Link>
        </li>
        <li>
          <Link to={match.url + "/brand-6"}>Brand-6</Link>
        </li>
      </ul>
    </>
  );
};

export default CategoryPage;

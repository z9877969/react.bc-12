import { Link } from "react-router-dom";

const HomePage = () => {
  console.log("HomePage");
  return (
    <ul>
      <li>
        <Link to="/Футболки">Футболки</Link>
      </li>
      <li>
        <Link to="/Рубашки">Рубашки</Link>
      </li>
      <li>
        <Link to="/Брюки">Брюки</Link>
      </li>
      <li>
        <Link to="/Костюмы">Костюмы</Link>
      </li>
      <li>
        <Link to="/Аксесуары">Аксесуары</Link>
      </li>
      <li>
        <Link to="/Ремни">Ремни</Link>
      </li>
    </ul>
  );
};

export default HomePage;

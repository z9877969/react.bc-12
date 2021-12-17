import { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import qs from "query-string";
import axios from "axios";

const DeliveryPage = () => {
  const [region, setRegion] = useState(null);
  const { search } = useLocation();
  const history = useHistory();
  const { reg } = qs.parse(search);

  useEffect(() => {
    reg === undefined &&
      history.push({
        pathname: "/delivery",
        search: "?reg=ua",
      });
    reg &&
      axios
        .get("http://localhost:3004/delivery/" + reg)
        .then((res) => setRegion(res.data));
  }, [reg]);

  return (
    <>
      <h1>DeliveryPage</h1>
      <select
        name="region"
        value={reg}
        onChange={(e) =>
          history.push({
            pathname: "/delivery",
            search: `?reg=${e.target.value}`,
          })
        }
      >
        <option value="ua">UA</option>
        <option value="pl">PL</option>
        <option value="uk">UK</option>
      </select>
      <p>Price - {region?.price}</p>
    </>
  );
};

export default DeliveryPage;

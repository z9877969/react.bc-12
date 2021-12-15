import { useEffect, useState } from "react";

export const useLocalStorage = (initialValue, key) => {
  const [data, setData] = useState(initialValue);

  console.log(initialValue);

  useEffect(() => {
    const dataFromLS = localStorage.getItem(key);
    dataFromLS && setData(JSON.parse(dataFromLS));
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data]);

  return [data, setData];
};

// const [value, setValue] = useLocalStorage(iV);

import { useEffect, useState } from "react";

export const useLocalStorage = (initialValue, key) => {
  const [data, setData] = useState(() => {
    const dataFromLS = localStorage.getItem(key);
    return dataFromLS ? JSON.parse(dataFromLS) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data]);

  return [data, setData];
};

// const [value, setValue] = useLocalStorage(iV);

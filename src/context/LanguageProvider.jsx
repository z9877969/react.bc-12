import { createContext, useContext } from "react";

const LanguageContext = createContext();
export const useLanguageContext = () => useContext(LanguageContext);

const dataFormOptions = {
  date: {
    ru: "Дата",
    en: "Date",
  },
  time: {
    ru: "Время",
    en: "Time",
  },
  category: {
    ru: "Категория",
    en: "Category",
  },
  sum: {
    ru: "Сумма",
    en: "Summ",
  },
  currency: {
    ru: "Валюта",
    en: "Currency",
  },
  comment: {
    ru: "Комментарий",
    en: "Comment",
  },
};

const LanguageProvider = ({ children }) => {
  return (
    <LanguageContext.Provider value={{ dataFormOptions }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;

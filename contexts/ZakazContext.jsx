import { createContext, useEffect, useState } from "react";

export const ZakazContext = createContext();

export default function ZakazProvider({ children }) {
  const [zakazs, setZakazs] = useState([]);
  useEffect(() => {
    const storageZakazs = JSON.parse(localStorage.getItem("zakazlar"));
    if (storageZakazs != null) {
      setZakazs(storageZakazs);
    }
  }, []);
  const value = { zakazs, setZakazs };
  return (
    <ZakazContext.Provider value={value}>{children}</ZakazContext.Provider>
  );
}

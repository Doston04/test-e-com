import { createContext, useEffect, useState } from "react";

export const OrderContext = createContext();

export default function OrderProvider(props) {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const storageOrders = JSON.parse(localStorage.getItem("orders"));
    if (storageOrders != null) {
      setOrders(storageOrders);
    }
  }, []);
  const value = { orders, setOrders };
  return (
    <OrderContext.Provider value={value}>
      {props.children}
    </OrderContext.Provider>
  );
}

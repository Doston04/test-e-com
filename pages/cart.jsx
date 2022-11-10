import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../contexts/OrderContext";

export default function Cart() {
  const [storageUser, setStorageUser] = useState();
  const [isDisabled, setIsDisabled] = useState(true);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user !== null) setStorageUser(user) || setIsDisabled(false);
  }, []);
  const { orders } = useContext(OrderContext);
  const [total, setTotal] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const totalFunction = () => {
    let i = 0;
    let l = 0;
    orders.forEach((order) => {
      console.log(order);
      i += order.price;
      l += order.count;
    });
    setTotal(i);
    setTotalProducts(l);
  };
  useEffect(() => {
    totalFunction();
  });
  return (
    <div>
      <span>Cart</span>
      <span style={{ marginLeft: "50px" }}>{totalProducts}</span>
      <div className="section_inner">
        {orders.map((order) => {
          return (
            <Order
              key={order.id}
              order={order}
              totalFunction={totalFunction}
              total={total}
            />
          );
        })}
        <div>{total}</div>
        <button disabled={isDisabled}>Zakaz qil</button>
      </div>
    </div>
  );
}

const Order = ({ order, totalFunction, total }) => {
  const { orders, setOrders } = useContext(OrderContext);
  const [count, setCount] = useState(order.count);
  const addCounter = () => {
    setCount(count + 1);
    let ordersArray = [...orders];
    if (ordersArray && ordersArray.length) {
      let singleOrder = ordersArray.find((e) => {
        if (e.id == order.id) {
          e.count = e.count + 1;
          total = e.count * order.price;
          console.log(total);
          return e;
        }
      });
      if (!singleOrder) {
        singleOrder.count = 1;
        ordersArray.push(singleOrder);
      }
    } else {
      singleOrder.count = 1;
      ordersArray.push(singleOrder);
    }
    setOrders(ordersArray);
    totalFunction();
    localStorage.setItem("orders", JSON.stringify(ordersArray));
  };
  const removeCounter = () => {
    setCount(count - 1);
    let ordersArray = [...orders];
    if (ordersArray && ordersArray.length) {
      ordersArray.forEach((e, index) => {
        if (e.id == order.id) {
          e.count = e.count - 1;
          total = e.count * order.price;
          console.log(total);
          if (e.count == 0) {
            ordersArray.splice(index, 1);
          }
        }
      });
    }
    setOrders(ordersArray);
    totalFunction();
    localStorage.setItem("orders", JSON.stringify(ordersArray));
  };
  return (
    <div className="order" key={order.id}>
      <button onClick={removeCounter}>-</button>
      <p>{order.title}</p>
      <p>{order.price}</p>
      <p style={{ background: "red", padding: "10px", color: "white" }}>
        {count}
      </p>
      <button onClick={addCounter}>+</button>
      <p>{order.price}</p>
    </div>
  );
};

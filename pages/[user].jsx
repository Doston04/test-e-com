import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../contexts/OrderContext";

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
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
  // const [count, setCount] = useState(order.count);
  // const addCounter = () => {
  //   setCount(count + 1);
  //   let ordersArray = [...orders];
  //   if (ordersArray && ordersArray.length) {
  //     let singleOrder = ordersArray.find((e) => {
  //       if (e.id == order.id) {
  //         e.count = e.count + 1;
  //         total = e.count * order.price;
  //         console.log(total);
  //         return e;
  //       }
  //     });
  //     if (!singleOrder) {
  //       singleOrder.count = 1;
  //       ordersArray.push(singleOrder);
  //     }
  //   } else {
  //     singleOrder.count = 1;
  //     ordersArray.push(singleOrder);
  //   }
  //   setOrders(ordersArray);
  //   totalFunction();
  //   localStorage.setItem("orders", JSON.stringify(ordersArray));
  // };
  // const removeCounter = () => {
  //   setCount(count - 1);
  //   let ordersArray = [...orders];
  //   if (ordersArray && ordersArray.length) {
  //     ordersArray.forEach((e, index) => {
  //       if (e.id == order.id) {
  //         e.count = e.count - 1;
  //         total = e.count * order.price;
  //         console.log(total);
  //         if (e.count == 0) {
  //           ordersArray.splice(index, 1);
  //         }
  //       }
  //     });
  //   }
  //   setOrders(ordersArray);
  //   totalFunction();
  //   localStorage.setItem("orders", JSON.stringify(ordersArray));
  // };
  return (
    <div>
      <p>Ism: {user.name}</p>
      <p>Familiya: {user.surname}</p>
      <p>Username: {user.username}</p>
      <br />
      <br />
      <br />
      <div>
        <p>Orderlari:</p>
        <ul>
          {orders.map((order) => {
            return (
              <li key={order.id}>
                {order.title}{" "}
                <span style={{ marginLeft: "40px" }}>{order.count}</span>
              </li>
            );
          })}
        </ul>
        <p>{total}</p>
      </div>
    </div>
  );
}

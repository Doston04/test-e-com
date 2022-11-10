import axios from "axios";
import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import { OrderContext } from "../contexts/OrderContext";
import productsArray from "../data/data.json";

export default function Home() {
  // const [data, setData] = useState([]);
  const { orders } = useContext(OrderContext);
  // const onClear = () => {
  //   localStorage.removeItem("orders");
  //   router.push("/");
  //   router.reload(window.location.pathname);
  // };
  const products = productsArray.products;
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => {
  //       setData(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);
  return (
    <div>
      <Head>
        <title>e-commerce songisi karoce</title>
        <meta name="description" content="Test e-commerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section>
          <h1>TITLE</h1>
          <div className={`section_inner container`}>
            {products.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </div>
        </section>
      </Layout>
    </div>
  );
}

const Product = ({ product }) => {
  const { orders, setOrders } = useContext(OrderContext);
  const saveStorage = () => {
    // console.log(product);
    // let count = product.count;
    // count = count + 1;
    // if (orders.some((e) => e.id === product.id)) {
    //   return;
    // }
    let ordersArray = [...orders];
    if (ordersArray && ordersArray.length) {
      let order = ordersArray.find((e) => {
        if (e.id == product.id) {
          e.count = e.count + 1;
          return e;
        }
      });
      if (!order) {
        product.count = 1;
        ordersArray.push(product);
      }
    } else {
      product.count = 1;
      ordersArray.push(product);
    }
    setOrders(ordersArray);
    localStorage.setItem("orders", JSON.stringify(ordersArray));
  };
  const isFound = orders.some((element) => {
    if (element.id === product.id) {
      return true;
    } else {
      return false;
    }
  });
  return (
    <div>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <button onClick={saveStorage}>{isFound ? "Added" : "Add"}</button>
    </div>
  );
};

// const User = ({ user }) => {
//   const { orders, setOrders } = useContext(OrderContext);
//   const addOrder = (e) => {
//     if (orders.some((e) => e.id === user.id)) {
//       return;
//     }
//     let ordersArray = [...orders];
//     ordersArray.push(user);
//     setOrders(ordersArray);

//     localStorage.setItem("orders", JSON.stringify(ordersArray));
//   };
//   const isFound = orders.some((element) => {
//     if (element.id === user.id) {
//       return true;
//     } else {
//       return false;
//     }
//   });
//   console.log(orders);
//   return (
//     <div>
//       <p>{user.name}</p>
//       <button onClick={addOrder}>{isFound ? "Added" : "Add"}</button>
//     </div>
//   );
// };

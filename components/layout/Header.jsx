import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { OrderContext } from "../../contexts/OrderContext";
import { UserContext } from "../../contexts/UserContext";
import styles from "./Layout.module.css";

export default function Header() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user !== null) setCurrentUser(user);
  }, []);
  const [total, setTotal] = useState(0);
  const { users } = useContext(UserContext);
  console.log(users);
  // const [count, setCount] = useState(1);
  // const countChanger = () => {
  //   if (count >= 0) {
  //     setCount(count + 1);
  //   } else if ((count = 1)) {
  //     return count;
  //   }
  // };
  useEffect(() => {
    let t = 0;
    orders.forEach((order) => {
      t += order.count;
    });
    setTotal(t);
  });
  const { orders } = useContext(OrderContext);
  return (
    <header>
      <div className={`${styles.header_inner} container`}>
        <div className={styles.flex20}>
          <p>Header</p>
          <Link className={styles.cart} href="/cart">
            {total}
          </Link>
        </div>
        {currentUser ? (
          <Link href={`/${currentUser.username}`}>
            {currentUser.name} {currentUser.surname}
          </Link>
        ) : (
          <Link href="/login" className="loginBtn">
            Login
          </Link>
        )}
      </div>
    </header>
  );
}

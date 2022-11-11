import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Register() {
  const router = useRouter();
  const { users, setUsers } = useContext(UserContext);
  let userArray = [...users];

  const nameInp = useRef();
  const surnameInp = useRef();
  const usernameInp = useRef();
  const passwordInp = useRef();

  const [message, setMessage] = useState("You are not logged in");

  const createUser = (e) => {
    e.preventDefault();
    const userInfo = {
      name: nameInp.current.value,
      surname: surnameInp.current.value,
      username: usernameInp.current.value,
      password: passwordInp.current.value,
    };

    userArray.push(userInfo);
    setUsers(userArray);
    localStorage.setItem("users", JSON.stringify(userArray));
    localStorage.setItem("user", JSON.stringify(userInfo));
    router.push("/");

    // console.log(user);
    // localStorage.setItem("user", JSON.stringify(user));
  };

  return (
    <div className="container">
      <form method="POST" action="/api/login" className="form">
        <h2>Register</h2>
        <h4>{message}</h4>
        <input ref={nameInp} name="name" type="text" placeholder="name" />
        <input
          ref={surnameInp}
          name="surname"
          type="text"
          placeholder="surname"
        />
        <input
          ref={usernameInp}
          name="username"
          type="text"
          placeholder="username"
        />
        <input
          ref={passwordInp}
          name="password"
          type="password"
          placeholder="parol"
        />
        <input type="button" value="Register" onClick={createUser} />
      </form>
    </div>
  );
}

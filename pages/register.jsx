import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import data from "../data/data.json";

export default function Register() {
  const router = useRouter();
  const { users, setUsers } = useContext(UserContext);
  let userArray = [...users];

  const nameInp = useRef();
  const surnameInp = useRef();
  const usernameInp = useRef();
  const passwordInp = useRef();

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
      <form className="form">
        <h2>Register</h2>
        <input ref={nameInp} type="text" placeholder="name" />
        <input ref={surnameInp} type="text" placeholder="surname" />
        <input ref={usernameInp} type="text" placeholder="username" />
        <input ref={passwordInp} type="password" placeholder="parol" />
        <button type="submit" onClick={createUser}>
          Submit
        </button>
      </form>
    </div>
  );
}

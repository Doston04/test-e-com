import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Login() {
  const { users } = useContext(UserContext);
  const router = useRouter();
  const usernameInp = useRef();
  const passwordInp = useRef();
  const onLogin = (e) => {
    e.preventDefault();
    users.forEach((user) => {
      if (
        user.username == usernameInp.current.value ||
        user.password == passwordInp.current.value
      ) {
        console.log("Togri");
        console.log(user);
        const userInfo = {
          name: user.name,
          surname: user.surname,
          username: user.username,
          password: user.password,
        };
        localStorage.setItem("user", JSON.stringify(userInfo));
        router.push("/");
      }
    });
  };
  return (
    <div className="container">
      <form className="form">
        <h2>Login</h2>
        <input ref={usernameInp} type="text" placeholder="username" />
        <input ref={passwordInp} type="password" placeholder="parol" />
        <button type="submit" onClick={onLogin}>
          Submit
        </button>
        <p>
          Akkauntin yomi? Unda{" "}
          <Link className="inner-link" href="/register">
            Register
          </Link>{" "}
          qil
        </p>
      </form>
    </div>
  );
}

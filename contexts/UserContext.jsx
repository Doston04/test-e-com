import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const storageUsers = JSON.parse(localStorage.getItem("users"));
    if (storageUsers != null) {
      setUsers(storageUsers);
    }
  }, []);
  const value = { users, setUsers };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

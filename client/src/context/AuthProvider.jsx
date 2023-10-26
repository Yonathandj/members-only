import { createContext } from "react";
import { useEffect, useState } from "react";

export const authContext = createContext({
  user: {
    userId: null,
    isAdmin: null,
  },
});

export default function AuthContext({ children }) {
  const [user, setUser] = useState({
    userId: null,
    isAdmin: null,
  });
  const handleSetUser = ({ userId, isAdmin }) => {
    setUser({ userId, isAdmin });
    localStorage.setItem("activeUser", JSON.stringify({ userId, isAdmin }));
  };
  useEffect(() => {
    const activeUser = JSON.parse(localStorage.getItem("activeUser"));
    if (activeUser) {
      setUser(activeUser)
    }
  }, []);
  console.log(user);
  return (
    <authContext.Provider value={{ user, handleSetUser }}>
      {children}
    </authContext.Provider>
  );
}

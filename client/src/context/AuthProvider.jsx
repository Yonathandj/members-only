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
  const handleDeleteUser = () => {
    setUser({
      userId: null,
      isAdmin: null,
    });
    localStorage.removeItem("activeUser");
  };
  useEffect(() => {
    const activeUser = JSON.parse(localStorage.getItem("activeUser"));
    if (activeUser) {
      setUser(activeUser);
    }
  }, []);
  return (
    <authContext.Provider value={{ user, handleSetUser, handleDeleteUser }}>
      {children}
    </authContext.Provider>
  );
}

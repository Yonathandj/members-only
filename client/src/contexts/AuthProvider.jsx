import { createContext } from "react";
import { useEffect, useState } from "react";

export const authContext = createContext({ userId: null, isAdmin: null });

export default function AuthContext({ children }) {
  const [user, setUser] = useState({ userId: null, isAdmin: null });
  useEffect(() => {
    const activeUser = JSON.parse(localStorage.getItem("activeUser"));
    if (activeUser) {
      setUser(activeUser);
    }
  }, []);

  return (
    <authContext.Provider value={{ user, setUser }}>
      {children}
    </authContext.Provider>
  );
}

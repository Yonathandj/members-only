import { createContext, useEffect, useState } from "react";

export const globalStateContext = createContext(null);

export default function GlobalStateProvider({ children }) {
  const [rooms, setRooms] = useState([
    { _id: 0, name: "Loading for available rooms" },
  ]);
  const [messages, setMessages] = useState([]);

  const getAllRooms = async () => {
    const response = await fetch("http://localhost:3200/rooms", {
      method: "GET",
      mode: "cors",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    });
    const res = await response.json();
    setRooms(res.rooms);
  };
  useEffect(() => {
    getAllRooms();
  }, []);

  return (
    <globalStateContext.Provider
      value={{ rooms, setRooms, messages, setMessages, getAllRooms }}
    >
      {children}
    </globalStateContext.Provider>
  );
}

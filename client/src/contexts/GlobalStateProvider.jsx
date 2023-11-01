import { createContext, useState } from "react";

export const globalStateContext = createContext(null);

export default function GlobalStateProvider({ children }) {
  const [rooms, setRooms] = useState([]);
  const [messages, setMessages] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState({
    isSelected: false,
    _id: null,
  });

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
  const getAllMessagesForSpecificRoom = async (selectedRoom) => {
    const response = await fetch(
      `http://localhost:3200/messages/rooms/${selectedRoom._id}`,
      {
        mode: "cors",
        method: "GET",
        credentials: "include",
      },
    );
    const Allmessages = await response.json();
    setMessages(Allmessages.messages);
  };
  return (
    <globalStateContext.Provider
      value={{
        rooms,
        setRooms,
        messages,
        setMessages,
        selectedRoom,
        setSelectedRoom,
        getAllRooms,
        getAllMessagesForSpecificRoom,
      }}
    >
      {children}
    </globalStateContext.Provider>
  );
}

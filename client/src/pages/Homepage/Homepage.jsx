import { useContext, useState } from "react";

import CRUDRoom from "../../components/CRUDRoom/CRUDRoom";
import RoomList from "../../components/RoomList/RoomList";
import NavBar from "../../components/Navbar/NavBar";

import { authContext } from "../../context/AuthProvider";
import RoomChat from "../../components/RoomChat/RoomChat";

export default function Homepage() {
  const { user } = useContext(authContext);
  const [selectRoom, setSelectRoom] = useState({
    isSelected: false,
    roomId: "",
  });
  const [message, setMessage] = useState("");
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmitMessage = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5172/messages", {
      mode: "cors",
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: user.userId,
        roomId: selectRoom.roomId,
        message,
      }),
    });
    const data = await response.json()
    console.log(data);
    setMessage('')
  };

  return (
    <>
      <NavBar />
      <section>
        <h2 className="mx-auto mt-10 text-center text-5xl font-bold text-purple-600 sm:text-7xl">
          Members Only
        </h2>
        <h2 className="mx-auto mt-2 text-center text-5xl font-bold text-purple-600 sm:text-7xl">
          Room Chat
        </h2>
      </section>
      {user.isAdmin === true && <CRUDRoom />}
      {selectRoom.isSelected ? (
        <RoomChat
          message={message}
          handleMessage={handleMessage}
          setSelectRoom={setSelectRoom}
          handleSubmitMessage={handleSubmitMessage}
        />
      ) : (
        <RoomList setSelectRoom={setSelectRoom} />
      )}
    </>
  );
}

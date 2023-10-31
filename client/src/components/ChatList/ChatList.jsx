import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AtSymbolIcon } from "@heroicons/react/24/outline";
import { globalStateContext } from "../../contexts/GlobalStateProvider";

import ChatInput from "../ChatInput/ChatInput";

export default function ChatList() {
  const params = useParams();
  const [messages, setMessages] = useState([]);

  const { rooms } = useContext(globalStateContext);
  const selectedRoom =
    rooms?.length > 0
      ? rooms.filter((room) => room._id === params.roomId)[0]
      : null;

  useEffect(() => {
    const getMessagesForSpecificRoom = async () => {
      const response = await fetch(
        `http://localhost:3200/messages/rooms/${selectedRoom._id}`,
        {
          method: "GET",
          mode: "cors",
          credentials: "include",
        },
      );
      const messages = await response.json();
      setMessages(messages);
    };
    selectedRoom && getMessagesForSpecificRoom();
  }, [selectedRoom]);

  console.log(messages);

  return (
    <div className="flex h-[480px] flex-col justify-between rounded-2xl bg-[url('../../../public/chat-background.jpg')] p-4 text-slate-100 shadow-lg">
      <section>
        <section className="flex w-1/3 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 p-1">
          <AtSymbolIcon className="w-6" />
          <h2 className="text-lg">{selectedRoom.name} Room</h2>
        </section>
        <section className="mt-10">Hehehe</section>
      </section>
      <section>
        <ChatInput selectedRoom={selectedRoom} />
      </section>
    </div>
  );
}

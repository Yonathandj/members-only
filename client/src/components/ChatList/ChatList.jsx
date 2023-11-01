import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AtSymbolIcon } from "@heroicons/react/24/outline";
import { globalStateContext } from "../../contexts/GlobalStateProvider";

import ChatInput from "../ChatInput/ChatInput";

export default function ChatList() {
  const params = useParams();
  const { rooms, messages, setMessages } = useContext(globalStateContext);
  const selectedRoom =
    rooms?.length > 0
      ? rooms.filter((room) => room._id === params.roomId)[0]
      : null;
  useEffect(() => {
    const getAllMessagesForSpecificRoom = async () => {
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
    selectedRoom && getAllMessagesForSpecificRoom();
  }, [selectedRoom, setMessages]);
  return (
    <div className="flex h-[480px] flex-col justify-between rounded-2xl bg-[url('../../../public/chat-background.jpg')] p-4 text-slate-100 shadow-lg">
      <section className="overflow-y-auto">
        <section className="flex w-1/4 items-center gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 p-1">
          <AtSymbolIcon className="w-6" />
          <h2>{selectedRoom.name} Room</h2>
        </section>
        <section className="mt-10 flex flex-col gap-y-4">
          {messages?.length > 0 &&
            messages.map((message) => (
              <div key={message._id} className="max-w-xs">
                <section className="max-w-[80%] rounded-br-full rounded-tl-full rounded-tr-full bg-zinc-900 p-2 pl-5">
                  <h2 className="bg-gradient-to-r from-green-600 to-slate-100 bg-clip-text text-transparent">
                    {message.userId.firstName} {message.userId.lastName}
                  </h2>
                  <p className="text-sm">{message.message}</p>
                </section>
                <section className="mt-1 pl-5">
                  <p className="text-xs">{message.createdAt}</p>
                </section>
              </div>
            ))}
        </section>
      </section>
      <section>
        <ChatInput selectedRoom={selectedRoom} />
      </section>
    </div>
  );
}

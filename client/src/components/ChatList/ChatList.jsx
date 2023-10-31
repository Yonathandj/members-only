import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AtSymbolIcon } from "@heroicons/react/24/outline";
import { globalStateContext } from "../../contexts/GlobalStateProvider";

import ChatInput from "../ChatInput/ChatInput";

export default function ChatList() {
  const params = useParams();
  const { rooms } = useContext(globalStateContext);
  const selectedRoom = rooms.filter((room) => room._id === params.roomId)[0];
  return (
    <div className="flex h-[480px] flex-col justify-between rounded-2xl bg-[url('../../../public/chat-background.jpg')] p-4 text-slate-100 shadow-lg">
      <section className="flex w-1/3 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 p-1">
        <AtSymbolIcon className="w-6" />
        <h2 className="text-lg">{selectedRoom.name} Room</h2>
      </section>
      <section>
        <ChatInput selectedRoom={selectedRoom} />
      </section>
    </div>
  );
}

import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

import { authContext } from "../../contexts/AuthProvider";
import { globalStateContext } from "../../contexts/GlobalStateProvider";

export default function ChatInput({ selectedRoom }) {
  const { fetcher } = useFetch();
  const { user } = useContext(authContext);
  const [message, setMessage] = useState("");
  const { getAllMessagesForSpecificRoom } = useContext(globalStateContext);
  const handleSubmitMessage = async (e) => {
    e.preventDefault();
    await fetcher({
      url: "http://localhost:3200/messages",
      method: "POST",
      credentials: "include",
      data: { userId: user.userId, roomId: selectedRoom._id, message },
    });
    setMessage("");
    getAllMessagesForSpecificRoom(selectedRoom);
  };
  return (
    <form
      className="relative mt-2 text-slate-100"
      onSubmit={handleSubmitMessage}
    >
      <input
        required
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Share your thoughts"
        className="w-full rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 p-2 outline-none"
      />
      <button type="submit">
        <PaperAirplaneIcon className="absolute right-4 top-2 w-6" />
      </button>
    </form>
  );
}

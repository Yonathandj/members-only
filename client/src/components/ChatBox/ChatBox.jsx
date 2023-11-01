import { useContext } from "react";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { globalStateContext } from "../../contexts/GlobalStateProvider";

import ChatList from "../ChatList/ChatList";
export default function ChatBox() {
  const { isSelectRoom, setIsSelectRoom } = useContext(globalStateContext);
  return (
    <div className="flex gap-2">
      <section className="w-1/12 text-slate-100">
        <Link to={"/rooms"} onClick={() => setIsSelectRoom(!isSelectRoom)}>
          <ChevronLeftIcon className="w-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 p-2" />
        </Link>
      </section>
      <section className="w-11/12">
        <ChatList />
      </section>
    </div>
  );
}

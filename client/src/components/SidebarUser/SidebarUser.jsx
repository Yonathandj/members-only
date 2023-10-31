import { useContext } from "react";
import { Link } from "react-router-dom";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { globalStateContext } from "../../contexts/GlobalStateProvider";

export default function SidebarUser() {
  const { rooms } = useContext(globalStateContext);
  return (
    <section className="flex gap-2">
      <div className="h-40 w-[2px] bg-slate-600"></div>
      <section className="flex flex-col justify-center gap-y-6">
        {rooms?.length > 0 ? (
          rooms.map((room) => (
            <Link
              className="flex items-center gap-2"
              key={room._id}
              to={`${room._id}`}
            >
              <ChatBubbleLeftRightIcon className="w-6" />
              <p className="text-purple-600">{room.name}</p>
            </Link>
          ))
        ) : (
          <Link className="flex items-center gap-2" to={``}>
            <ChatBubbleLeftRightIcon className="w-6" />
            <p className="text-purple-600">Please wait! Load available rooms</p>
          </Link>
        )}
      </section>
    </section>
  );
}

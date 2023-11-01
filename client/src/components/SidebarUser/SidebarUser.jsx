import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { globalStateContext } from "../../contexts/GlobalStateProvider";

export default function SidebarUser() {
  const { rooms, setRooms, selectedRoom, setSelectedRoom } =
    useContext(globalStateContext);
  useEffect(() => {
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
    getAllRooms();
  }, [setRooms]);

  return (
    <section className="flex gap-2">
      <div className="h-40 w-[2px] bg-slate-600"></div>
      <section className="flex flex-col justify-center gap-y-6">
        {rooms?.length > 0 ? (
          rooms.map((room) => (
            <Link
              onClick={() =>
                setSelectedRoom({ isSelected: true, _id: room._id })
              }
              className={`flex items-center gap-2 ${
                selectedRoom._id === room._id && "rounded-full bg-zinc-900 p-3"
              }`}
              key={room._id}
              to={`${room._id}`}
            >
              <ChatBubbleLeftRightIcon
                className={`w-6 ${
                  selectedRoom._id === room._id && "text-slate-100"
                }`}
              />
              <p
                className={`${
                  selectedRoom._id === room._id
                    ? "text-slate-100"
                    : "text-purple-600"
                }`}
              >
                {room.name}
              </p>
            </Link>
          ))
        ) : (
          <Link className="flex items-center gap-2" to={``}>
            <ChatBubbleLeftRightIcon className="w-6" />
            <p className="text-purple-600">Load available rooms</p>
          </Link>
        )}
      </section>
    </section>
  );
}
